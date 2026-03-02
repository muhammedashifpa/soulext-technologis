"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandingIcon from "@mui/icons-material/FlightLand";
import PersonIcon from "@mui/icons-material/Person";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import RestartAlt from "@mui/icons-material/RestartAlt";

import {
  TRAVEL_CLASS_OPTIONS,
  TRIP_TYPE_OPTIONS,
  TRIP_CATEGORY_OPTIONS,
  AIRPORTS,
  INDIAN_AIRPORTS,
  TRIP_CATEGORY,
} from "@/constants/flightConstants";
import { useFlightStore } from "@/store/useFlightStore";

export default function FlightSearch() {
  const { applySearch, resetFilters, restSearchFilters } = useFlightStore();

  const [flightType, setFlightType] = useState("");
  const [travelClass, setTravelClass] = useState("");
  const [tripCategory, setTripCategory] = useState("");
  const [fromCode, setFromCode] = useState("");
  const [toCode, setToCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [travelers, setTravelers] = useState(1);

  const handleTripCategoryChange = (e) => {
    setTripCategory(e.target.value);
    setFromCode("");
    setToCode("");
  };

  // Derive airport lists based on selections
  const fromAirports =
    tripCategory === TRIP_CATEGORY.DOMESTIC ? INDIAN_AIRPORTS : AIRPORTS;

  const fromCountry = AIRPORTS.find((a) => a.code === fromCode)?.country;

  const toAirports = (() => {
    if (tripCategory === TRIP_CATEGORY.DOMESTIC) {
      // Same country as From, exclude the selected From airport
      return fromCode
        ? INDIAN_AIRPORTS.filter((a) => a.code !== fromCode)
        : INDIAN_AIRPORTS;
    }
    if (tripCategory === TRIP_CATEGORY.INTERNATIONAL && fromCode) {
      // Any airport NOT in the same country as From
      return AIRPORTS.filter((a) => a.country !== fromCountry);
    }
    return AIRPORTS;
  })();

  const handleSearch = () => {
    applySearch({
      travelClass,
      tripCategory,
      from: fromCode,
      to: toCode,
      departureDate,
      travelers: parseInt(travelers),
    });
  };

  useEffect(() => {
    applySearch({
      travelClass,
      tripCategory,
      from: fromCode,
      to: toCode,
      departureDate,
      travelers: parseInt(travelers),
    });
  }, [travelClass, tripCategory, fromCode, toCode, departureDate, travelers]);
  const resetSearchAndFilters = () => {
    setFlightType("");
    setTravelClass("");
    setTripCategory("");
    setFromCode("");
    setToCode("");
    setDepartureDate("");
    setTravelers("");
    restSearchFilters();
  };

  return (
    <Box>
      {/* Row 1: Dropdowns */}
      <Stack direction="row" spacing={1} sx={styles.dropdownStack}>
        <FormControl size="small">
          <Select
            value={flightType}
            onChange={(e) => setFlightType(e.target.value)}
            displayEmpty
            sx={styles.select}
            renderValue={(value) => (
              <Box sx={styles.flexCenter}>
                {value
                  ? TRIP_TYPE_OPTIONS.find((o) => o.value === value)?.label
                  : "Select Flights"}
              </Box>
            )}
          >
            {TRIP_TYPE_OPTIONS.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small">
          <Select
            value={travelClass}
            onChange={(e) => setTravelClass(e.target.value)}
            displayEmpty
            sx={styles.select}
            renderValue={(value) => (
              <Box sx={styles.flexCenter}>
                {value
                  ? TRAVEL_CLASS_OPTIONS.find((o) => o.value === value)?.label
                  : "Select Class"}
              </Box>
            )}
          >
            {TRAVEL_CLASS_OPTIONS.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small">
          <Select
            value={tripCategory}
            onChange={handleTripCategoryChange}
            displayEmpty
            sx={styles.select}
            renderValue={(value) => (
              <Box sx={styles.flexCenter}>
                {value
                  ? TRIP_CATEGORY_OPTIONS.find((o) => o.value === value)?.label
                  : "Select Trip"}
              </Box>
            )}
          >
            {TRIP_CATEGORY_OPTIONS.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>
                {opt.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      {/* Row 2: Search Controls */}
      <Stack direction="row" spacing={1} alignItems="stretch">
        <FormControl sx={styles.textFieldFlex12}>
          <Select
            value={fromCode}
            onChange={(e) => setFromCode(e.target.value)}
            displayEmpty
            sx={styles.airportSelect}
            startAdornment={<FlightTakeoffIcon sx={styles.iconAdornment} />}
            renderValue={(v) => (
              <Box sx={styles.flexCenter}>
                {v ? AIRPORTS.find((a) => a.code === v)?.city : "From"}
              </Box>
            )}
          >
            {fromAirports.map((a) => (
              <MenuItem key={a.code} value={a.code}>
                {a.city} ({a.code}) — {a.country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={styles.flexCenter}>
          <IconButton
            size="large"
            sx={styles.swapButton}
            onClick={() => {
              const t = fromCode;
              setFromCode(toCode);
              setToCode(t);
            }}
          >
            <SyncAltIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        <FormControl sx={styles.textFieldFlex12}>
          <Select
            value={toCode}
            onChange={(e) => setToCode(e.target.value)}
            displayEmpty
            sx={styles.airportSelect}
            startAdornment={<FlightLandingIcon sx={styles.iconAdornment} />}
            renderValue={(v) => (
              <Box sx={styles.flexCenter}>
                {v ? AIRPORTS.find((a) => a.code === v)?.city : "To"}
              </Box>
            )}
          >
            {toAirports.map((a) => (
              <MenuItem key={a.code} value={a.code}>
                {a.city} ({a.code}) — {a.country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Departure"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          sx={styles.textFieldFlex1}
          InputProps={{ sx: styles.inputHeight }}
        />

        <TextField
          placeholder="Travellers"
          variant="outlined"
          sx={styles.textFieldFlex12}
          value={travelers}
          InputProps={{
            startAdornment: <PersonIcon sx={styles.personIcon} />,
            sx: styles.inputHeight,
          }}
          onChange={(e) => {
            setTravelers(e.target.value);
          }}
        />

        {/* <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          sx={styles.searchButton}
          onClick={handleSearch}
        >
          Search
        </Button> */}
        <Button
          variant="outlined"
          color="primary"
          startIcon={<RestartAlt />}
          sx={styles.searchButton}
          onClick={resetSearchAndFilters}
        >
          Reset filters
        </Button>
      </Stack>
    </Box>
  );
}

const styles = {
  dropdownStack: { mb: 3 },
  select: {
    minWidth: 140,
    height: 40,
    fontWeight: 500,
    fontSize: "0.875rem",
    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      pr: "14px !important",
    },
  },
  airportSelect: {
    height: "56px",
    "& .MuiSelect-select": { display: "flex", alignItems: "center" },
  },
  flexCenter: { display: "flex", alignItems: "center" },
  textFieldFlex12: { flex: 1.2 },
  textFieldFlex1: { flex: 1 },
  iconAdornment: { mr: 1, color: "#888" },
  personIcon: { mr: 1, color: "#888", fontSize: 20 },
  inputHeight: { height: "56px" },
  swapButton: {
    bgcolor: "#F5F0FF",
    color: "primary.main",
    borderRadius: 1,
    "&:hover": { bgcolor: "#EDE7F6" },
  },
  searchButton: { height: "56px", px: 4, fontSize: "1rem", boxShadow: "none" },
};
