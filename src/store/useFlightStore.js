import { create } from "zustand";
import mockFlights from "@/data/flights.json";
import {
  SORT_BY,
  STOPS_PREDICATE,
  TRIP_TYPE,
  TRAVEL_CLASS,
} from "@/constants/flightConstants";

export const useFlightStore = create((set, get) => ({
  allFlights: mockFlights,
  displayedFlights: mockFlights,

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

  setSortBy: (sortBy) => {
    set({ sortBy });
    get().applyFiltersAndSort();
  },

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
    const { allFlights, filters, sortBy } = get();

    let results = allFlights.filter((flight) => {
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

    if (sortBy === SORT_BY.CHEAPEST) {
      results.sort((a, b) => a.price - b.price);
    } else if (sortBy === SORT_BY.FASTEST) {
      results.sort((a, b) => a.durationMins - b.durationMins);
    } else {
      results.sort(
        (a, b) => a.price + a.durationMins - (b.price + b.durationMins),
      );
    }

    set({ displayedFlights: results });
  },

  resetFilters: () => {
    set({
      filters: { stops: [], airlines: [], baggage: [] },
      sortBy: SORT_BY.RECOMMENDED,
    });
    get().applyFiltersAndSort();
  },
}));
