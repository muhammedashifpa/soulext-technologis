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

// Airlines list
export const AIRLINES = [
  "IndiGo",
  "Air India",
  "SpiceJet",
  "GoAir",
  "Vistara",
  "Emirates",
  "Qatar Airways",
  "Etihad Airways",
  "Air Arabia",
  "flydubai",
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

// Trip category
export const TRIP_CATEGORY = {
  DOMESTIC: "domestic",
  INTERNATIONAL: "international",
};

// Indian airports
export const INDIAN_AIRPORTS = [
  {
    code: "BOM",
    name: "Chhatrapati Shivaji International",
    city: "Mumbai",
    country: "India",
  },
  {
    code: "DEL",
    name: "Indira Gandhi International",
    city: "New Delhi",
    country: "India",
  },
  {
    code: "BLR",
    name: "Kempegowda International",
    city: "Bengaluru",
    country: "India",
  },
  {
    code: "MAA",
    name: "Chennai International",
    city: "Chennai",
    country: "India",
  },
  {
    code: "HYD",
    name: "Rajiv Gandhi International",
    city: "Hyderabad",
    country: "India",
  },
  {
    code: "COK",
    name: "Cochin International",
    city: "Kochi",
    country: "India",
  },
  {
    code: "CCU",
    name: "Netaji Subhas Chandra Bose Intl",
    city: "Kolkata",
    country: "India",
  },
  {
    code: "AMD",
    name: "Sardar Vallabhbhai Patel Intl",
    city: "Ahmedabad",
    country: "India",
  },
  { code: "PNQ", name: "Pune Airport", city: "Pune", country: "India" },
  { code: "GOI", name: "Goa International", city: "Goa", country: "India" },
  {
    code: "JAI",
    name: "Jaipur International",
    city: "Jaipur",
    country: "India",
  },
  {
    code: "LKO",
    name: "Chaudhary Charan Singh Intl",
    city: "Lucknow",
    country: "India",
  },
];

// Middle East airports
export const MIDDLE_EAST_AIRPORTS = [
  { code: "DXB", name: "Dubai International", city: "Dubai", country: "UAE" },
  {
    code: "AUH",
    name: "Abu Dhabi International",
    city: "Abu Dhabi",
    country: "UAE",
  },
  {
    code: "SHJ",
    name: "Sharjah International",
    city: "Sharjah",
    country: "UAE",
  },
  { code: "DOH", name: "Hamad International", city: "Doha", country: "Qatar" },
  {
    code: "RUH",
    name: "King Khalid International",
    city: "Riyadh",
    country: "Saudi Arabia",
  },
  {
    code: "JED",
    name: "King Abdulaziz International",
    city: "Jeddah",
    country: "Saudi Arabia",
  },
  {
    code: "MCT",
    name: "Muscat International",
    city: "Muscat",
    country: "Oman",
  },
  {
    code: "KWI",
    name: "Kuwait International",
    city: "Kuwait City",
    country: "Kuwait",
  },
  {
    code: "BAH",
    name: "Bahrain International",
    city: "Manama",
    country: "Bahrain",
  },
];

// Combined for use when no category filter is active
export const AIRPORTS = [...INDIAN_AIRPORTS, ...MIDDLE_EAST_AIRPORTS];
