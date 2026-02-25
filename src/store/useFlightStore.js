import { create } from "zustand";
import { devtools } from "zustand/middleware";
import mockFlights from "@/data/flights.json";
import {
  SORT_BY,
  STOPS_PREDICATE,
  TRIP_TYPE,
  TRAVEL_CLASS,
} from "@/constants/flightConstants";

function sortFlights(flights, sortBy) {
  const copy = [...flights];
  if (sortBy === SORT_BY.CHEAPEST)
    return copy.sort((a, b) => a.price - b.price);
  if (sortBy === SORT_BY.FASTEST)
    return copy.sort((a, b) => a.durationMins - b.durationMins);
  return copy.sort(
    (a, b) => a.price + a.durationMins - (b.price + b.durationMins),
  );
}

function buildDisplayedFlights(flights) {
  return {
    [SORT_BY.RECOMMENDED]: sortFlights(flights, SORT_BY.RECOMMENDED),
    [SORT_BY.FASTEST]: sortFlights(flights, SORT_BY.FASTEST),
    [SORT_BY.CHEAPEST]: sortFlights(flights, SORT_BY.CHEAPEST),
  };
}

function filterFlights(flights, filters) {
  return flights.filter((flight) => {
    if (filters.stops.length > 0) {
      if (!filters.stops.some((s) => STOPS_PREDICATE[s]?.(flight)))
        return false;
    }
    if (
      filters.airlines.length > 0 &&
      !filters.airlines.includes(flight.airlineName)
    ) {
      return false;
    }
    if (filters.baggage.length > 0) {
      if (!filters.baggage.every((b) => flight.baggage.includes(b)))
        return false;
    }
    return true;
  });
}

function buildFilterMeta(flights) {
  const stopBuckets = { Nonstop: [], "1 Stop": [], "2+ Stops": [] };
  const airlineMap = {};
  const baggageMap = {};

  for (const f of flights) {
    const bucket =
      f.stops === 0 ? "Nonstop" : f.stops === 1 ? "1 Stop" : "2+ Stops";
    stopBuckets[bucket].push(f.price);
    airlineMap[f.airlineName] ??= [];
    airlineMap[f.airlineName].push(f.price);
    for (const b of f.baggage) {
      baggageMap[b] ??= [];
      baggageMap[b].push(f.price);
    }
  }

  const minPrice = (arr) =>
    arr.length ? `$${Math.min(...arr).toLocaleString()}` : null;
  const toOption = (value, label, prices, extra = {}) => ({
    value,
    label,
    minPrice: minPrice(prices),
    ...extra,
  });

  return {
    stops: Object.entries(stopBuckets).map(([label, prices]) =>
      toOption(label, label, prices, { count: prices.length }),
    ),
    airlines: Object.entries(airlineMap).map(([name, prices]) =>
      toOption(name, name, prices),
    ),
    baggage: Object.entries(baggageMap).map(([name, prices]) =>
      toOption(name, name, prices),
    ),
  };
}

const emptyFilters = { stops: [], airlines: [], baggage: [] };
const initialDisplayedFlights = buildDisplayedFlights(mockFlights);
const initialFilterMeta = buildFilterMeta(mockFlights);

export const useFlightStore = create(
  devtools(
    (set, get) => ({
      allFlights: mockFlights,
      displayedFlights: initialDisplayedFlights,
      filterMeta: initialFilterMeta,

      tripType: TRIP_TYPE.ROUND_TRIP,
      travelClass: TRAVEL_CLASS.ECONOMY,
      sortBy: SORT_BY.RECOMMENDED,

      // What the user is selecting in the sidebar (not yet applied)
      pendingFilters: { ...emptyFilters },

      // What is currently applied to the flight results
      appliedFilters: { ...emptyFilters },

      setTripType: (tripType) => set({ tripType }, false, "setTripType"),
      setTravelClass: (travelClass) =>
        set({ travelClass }, false, "setTravelClass"),
      setSortBy: (sortBy) => set({ sortBy }, false, "setSortBy"),

      // Only updates the pending selection — does NOT filter the results
      toggleFilter: (category, value) => {
        set(
          (state) => {
            const current = state.pendingFilters[category];
            const updated = current.includes(value)
              ? current.filter((v) => v !== value)
              : [...current, value];
            return {
              pendingFilters: { ...state.pendingFilters, [category]: updated },
            };
          },
          false,
          `toggleFilter/${category}/${value}`,
        );
      },

      // Called on "Apply Filters" — commits pending to applied and re-sorts
      applyFiltersAndSort: () => {
        const { allFlights, pendingFilters } = get();
        const hasFilters = Object.values(pendingFilters).some(
          (f) => f.length > 0,
        );
        const source = hasFilters
          ? filterFlights(allFlights, pendingFilters)
          : allFlights;
        set(
          {
            appliedFilters: { ...pendingFilters },
            displayedFlights: buildDisplayedFlights(source),
          },
          false,
          "applyFiltersAndSort",
        );
      },

      // Clears both pending and applied
      resetFilters: () => {
        set(
          {
            pendingFilters: { ...emptyFilters },
            appliedFilters: { ...emptyFilters },
            sortBy: SORT_BY.RECOMMENDED,
            displayedFlights: initialDisplayedFlights,
            filterMeta: initialFilterMeta,
          },
          false,
          "resetFilters",
        );
      },
    }),
    { name: "FlightStore" },
  ),
);
