// Sort options used in tabs and dropdowns
export const SORT_BY = {
  RECOMMENDED: "recommended",
  FASTEST: "fastest",
  CHEAPEST: "cheapest",
};

export const SORT_BY_OPTIONS = [
  { value: SORT_BY.RECOMMENDED, label: "Recommended" },
  { value: SORT_BY.FASTEST, label: "Fastest" },
  { value: SORT_BY.CHEAPEST, label: "Cheapest" },
];

// Stop filter values
export const STOPS = {
  NONSTOP: "Nonstop",
  ONE_STOP: "1 Stop",
  TWO_PLUS: "2+ Stops",
};

export const STOPS_PREDICATE = {
  [STOPS.NONSTOP]: (f) => f.stops === 0,
  [STOPS.ONE_STOP]: (f) => f.stops === 1,
  [STOPS.TWO_PLUS]: (f) => f.stops >= 2,
};

export const STOPS_OPTIONS = [
  { value: STOPS.NONSTOP, label: "Nonstop" },
  { value: STOPS.ONE_STOP, label: "1 Stop" },
  { value: STOPS.TWO_PLUS, label: "2+ Stops" },
];

// Travel class options
export const TRAVEL_CLASS = {
  ECONOMY: "Economy",
  PREMIUM_ECONOMY: "Premium Economy",
  BUSINESS: "Business",
  FIRST: "First Class",
};

export const TRAVEL_CLASS_OPTIONS = [
  { value: TRAVEL_CLASS.ECONOMY, label: "Economy" },
  { value: TRAVEL_CLASS.PREMIUM_ECONOMY, label: "Premium Economy" },
  { value: TRAVEL_CLASS.BUSINESS, label: "Business" },
  { value: TRAVEL_CLASS.FIRST, label: "First Class" },
];

// Trip type
export const TRIP_TYPE = {
  ONE_WAY: "one_way",
  ROUND_TRIP: "round_trip",
  MULTI_CITY: "multi_city",
};

export const TRIP_TYPE_OPTIONS = [
  { value: TRIP_TYPE.ONE_WAY, label: "One Way" },
  { value: TRIP_TYPE.ROUND_TRIP, label: "Round Trip" },
  { value: TRIP_TYPE.MULTI_CITY, label: "Multi-City" },
];

// Airlines list — keep this in sync with generateFlights.mjs
export const AIRLINES = [
  "ABC Air Technologies",
  "ABC Airlines",
  "XYZ Airways",
  "BOP Links",
  "EDF Express",
];

// Baggage options
export const BAGGAGE = {
  CARRY_ON: "Carry-on bag",
  CHECKED: "Checked bag",
};

export const BAGGAGE_OPTIONS = [
  { value: BAGGAGE.CARRY_ON, label: "Carry-on bag" },
  { value: BAGGAGE.CHECKED, label: "Checked bag" },
];

// Refund statuses
export const REFUNDABLE_STATUS = {
  PARTIALLY: "Partially Refundable",
  NON: "Non-Refundable",
  FULLY: "Fully Refundable",
};

// Airports — each has IATA code, full name, city, and country
export const AIRPORTS = [
  {
    code: "MBA",
    name: "Moi International Airport",
    city: "Mombasa",
    country: "Kenya",
  },
  {
    code: "NBO",
    name: "Jomo Kenyatta International",
    city: "Nairobi",
    country: "Kenya",
  },
  {
    code: "LHR",
    name: "Heathrow Airport",
    city: "London",
    country: "United Kingdom",
  },
  {
    code: "CDG",
    name: "Charles de Gaulle Airport",
    city: "Paris",
    country: "France",
  },
  {
    code: "DXB",
    name: "Dubai International Airport",
    city: "Dubai",
    country: "UAE",
  },
  {
    code: "SIN",
    name: "Changi Airport",
    city: "Singapore",
    country: "Singapore",
  },
  {
    code: "SYD",
    name: "Kingsford Smith Airport",
    city: "Sydney",
    country: "Australia",
  },
  {
    code: "JFK",
    name: "John F. Kennedy International",
    city: "New York",
    country: "USA",
  },
  {
    code: "LAX",
    name: "Los Angeles International",
    city: "Los Angeles",
    country: "USA",
  },
  {
    code: "ORD",
    name: "O'Hare International",
    city: "Chicago",
    country: "USA",
  },
  { code: "HND", name: "Haneda Airport", city: "Tokyo", country: "Japan" },
  {
    code: "PEK",
    name: "Beijing Capital International",
    city: "Beijing",
    country: "China",
  },
  {
    code: "DEL",
    name: "Indira Gandhi International",
    city: "New Delhi",
    country: "India",
  },
  {
    code: "BOM",
    name: "Chhatrapati Shivaji International",
    city: "Mumbai",
    country: "India",
  },
  {
    code: "CPT",
    name: "Cape Town International",
    city: "Cape Town",
    country: "South Africa",
  },
  {
    code: "GRU",
    name: "Guarulhos International",
    city: "São Paulo",
    country: "Brazil",
  },
  {
    code: "AMS",
    name: "Amsterdam Airport Schiphol",
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    code: "FRA",
    name: "Frankfurt Airport",
    city: "Frankfurt",
    country: "Germany",
  },
  {
    code: "IST",
    name: "Istanbul Airport",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    code: "BKK",
    name: "Suvarnabhumi Airport",
    city: "Bangkok",
    country: "Thailand",
  },
];
