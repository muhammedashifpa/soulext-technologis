import { create } from "zustand";
import { devtools } from "zustand/middleware";
import mockFlights from "@/data/flights.json";
import {
  SORT_BY,
  STOPS_PREDICATE,
  TRIP_TYPE,
  TRAVEL_CLASS,
} from "@/constants/flightConstants";

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

  flights.forEach((f) => {
    const bucket =
      f.stops === 0 ? "Nonstop" : f.stops === 1 ? "1 Stop" : "2+ Stops";
    stopBuckets[bucket].push(f.price);
    airlineMap[f.airlineName] ??= [];
    airlineMap[f.airlineName].push(f.price);
    f.baggage.forEach((b) => {
      baggageMap[b] ??= [];
      baggageMap[b].push(f.price);
    });
  });

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

// Exported so FlightResults can sort its local copy without store involvement
export function sortFlights(flights, sortBy) {
  const copy = [...flights];
  if (sortBy === SORT_BY.CHEAPEST)
    return copy.sort((a, b) => a.price - b.price);
  if (sortBy === SORT_BY.FASTEST)
    return copy.sort((a, b) => a.durationMins - b.durationMins);
  return copy.sort(
    (a, b) => a.price + a.durationMins - (b.price + b.durationMins),
  );
}
export function calculateTotalPages(totalItems, itemsPerPage) {
  return Math.ceil(totalItems / itemsPerPage);
}
export function paginateFlights(array, itemsPerPage, currentPage) {
  // Human-readable page numbers usually start with 1, so we adjust for 0-based indexing
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  // Use slice() to get the relevant portion of the array
  return array.slice(startIndex, endIndex);
}

function formatDateToDisplay(iso) {
  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(iso);
  return `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

// --- Initial state ---

const emptyFilters = { stops: [], airlines: [], baggage: [] };
const initialMeta = buildFilterMeta(mockFlights);

// --- Store ---

export const useFlightStore = create(
  devtools(
    (set, get) => ({
      allFlights: mockFlights,

      // The current search scope — sidebar filters narrow within this
      searchResults: mockFlights,

      // The flights currently shown (search results narrowed by sidebar filters)
      filteredFlights: mockFlights,

      filterMeta: initialMeta,

      tripType: TRIP_TYPE.ROUND_TRIP,
      travelClass: TRAVEL_CLASS.ECONOMY,
      sortBy: SORT_BY.RECOMMENDED,

      // Sidebar selections not yet committed
      pendingFilters: { ...emptyFilters },

      // Sidebar selections currently applied to filteredFlights
      appliedFilters: { ...emptyFilters },

      setTripType: (tripType) => set({ tripType }, false, "setTripType"),
      setTravelClass: (travelClass) =>
        set({ travelClass }, false, "setTravelClass"),
      setSortBy: (sortBy) => set({ sortBy }, false, "setSortBy"),

      //Rest the flights search to initial state
      restSearchFilters: () => {
        set(
          (state) => {
            return {
              searchResults: mockFlights,
              pendingFilters: { ...emptyFilters },
              appliedFilters: { ...emptyFilters },
              sortBy: SORT_BY.RECOMMENDED,
              filteredFlights: mockFlights,
              filterMeta: initialMeta,
            };
          },
          false,
          "resetFlightSearch",
        );
      },

      // Checkbox toggle — only updates pendingFilters, no visible change yet
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

      // Apply Filters button — narrows filteredFlights within searchResults
      applyFiltersAndSort: () => {
        const { searchResults, pendingFilters } = get();
        const hasFilters = Object.values(pendingFilters).some(
          (f) => f.length > 0,
        );
        const filtered = hasFilters
          ? filterFlights(searchResults, pendingFilters)
          : searchResults;
        set(
          { appliedFilters: { ...pendingFilters }, filteredFlights: filtered },
          false,
          "applyFiltersAndSort",
        );
      },

      // Reset sidebar — restore filteredFlights to current searchResults
      resetFilters: () => {
        const { searchResults } = get();
        set(
          {
            pendingFilters: { ...emptyFilters },
            appliedFilters: { ...emptyFilters },
            sortBy: SORT_BY.RECOMMENDED,
            filteredFlights: searchResults,
            filterMeta: buildFilterMeta(searchResults),
          },
          false,
          "resetFilters",
        );
      },

      // Search button — filters allFlights, resets sidebar
      applySearch: ({
        travelClass,
        tripCategory,
        from,
        to,
        departureDate,
        travelers,
      }) => {
        const { allFlights } = get();

        const results = allFlights.filter((flight) => {
          if (travelClass && flight.travelClass !== travelClass) return false;
          if (travelers && flight.seatsRemaining < travelers) return false;
          if (tripCategory && flight.tripCategory !== tripCategory)
            return false;
          if (from && flight.departure.code !== from) return false;
          if (to && flight.arrival.code !== to) return false;
          if (
            departureDate &&
            flight.departureDate !== formatDateToDisplay(departureDate)
          )
            return false;
          return true;
        });

        set(
          {
            searchResults: results,
            filteredFlights: results,
            filterMeta: buildFilterMeta(results),
            pendingFilters: { ...emptyFilters },
            appliedFilters: { ...emptyFilters },
            sortBy: SORT_BY.RECOMMENDED,
          },
          false,
          "applySearch",
        );
      },
    }),
    { name: "FlightStore" },
  ),
);
