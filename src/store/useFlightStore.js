import { create } from "zustand";
import mockFlights from "@/data/flights.json";
import {
  SORT_BY,
  STOPS_PREDICATE,
  TRIP_TYPE,
  TRAVEL_CLASS,
} from "@/constants/flightConstants";

// build displayed flights for different sorting options
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
// Flight object creation for different sorting options
function buildDisplayedFlights(flights) {
  return {
    [SORT_BY.RECOMMENDED]: sortFlights(flights, SORT_BY.RECOMMENDED),
    [SORT_BY.FASTEST]: sortFlights(flights, SORT_BY.FASTEST),
    [SORT_BY.CHEAPEST]: sortFlights(flights, SORT_BY.CHEAPEST),
  };
}

// apply filters to flights eg: stops, airlines, baggage
function applyFilters(flights, filters) {
  return flights.filter((flight) => {
    if (filters.stops.length > 0) {
      const matches = filters.stops.some((s) => STOPS_PREDICATE[s]?.(flight));
      if (!matches) return false;
    }
    if (
      filters.airlines.length > 0 &&
      !filters.airlines.includes(flight.airlineName)
    ) {
      return false;
    }
    if (filters.baggage.length > 0) {
      const hasAll = filters.baggage.every((b) => flight.baggage.includes(b));
      if (!hasAll) return false;
    }
    return true;
  });
}

const initialDisplayedFlights = buildDisplayedFlights(mockFlights);

export const useFlightStore = create((set, get) => ({
  allFlights: mockFlights,

  // All three sorted views live here — read directly by the UI
  displayedFlights: initialDisplayedFlights,

  tripType: TRIP_TYPE.ROUND_TRIP,
  travelClass: TRAVEL_CLASS.ECONOMY,
  sortBy: SORT_BY.RECOMMENDED,

  filters: {
    stops: [],
    airlines: [],
    baggage: [],
  },

  setTripType: (tripType) => set({ tripType }),
  setTravelClass: (travelClass) => set({ travelClass }),
  setSortBy: (sortBy) => set({ sortBy }),

  toggleFilter: (category, value) => {
    set((state) => {
      const current = state.filters[category];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { filters: { ...state.filters, [category]: updated } };
    });
    get().applyFiltersAndSort();
  },

  applyFiltersAndSort: () => {
    const { allFlights, filters } = get();
    const hasFilters = Object.values(filters).some((f) => f.length > 0);

    if (!hasFilters) {
      set({ displayedFlights: initialDisplayedFlights });
      return;
    }

    const filtered = applyFilters(allFlights, filters);
    set({ displayedFlights: buildDisplayedFlights(filtered) });
  },

  resetFilters: () => {
    set({
      filters: { stops: [], airlines: [], baggage: [] },
      sortBy: SORT_BY.RECOMMENDED,
      displayedFlights: initialDisplayedFlights,
    });
  },
}));
