"use client";
import React, { useState } from "react";
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

export default function FlightSearch() {
  const [flightType, setFlightType] = useState("");
  const [flightClass, setFlightClass] = useState("");
  const [tripType, setTripType] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleFlightTypeChange = (event) => setFlightType(event.target.value);
  const handleFlightClassChange = (event) => setFlightClass(event.target.value);
  const handleTripTypeChange = (event) => setTripType(event.target.value);
  return (
    <Box>
      {/* Row 1: Dropdowns */}
      <Stack direction="row" spacing={1} sx={styles.dropdownStack}>
        <FormControl size="small">
          <Select
            value={flightType}
            onChange={handleFlightTypeChange}
            displayEmpty
            sx={styles.select}
            renderValue={(value) => {
              if (!value) {
                return <Box sx={styles.flexCenter}>Select Flights</Box>;
              }
              return (
                <Box sx={styles.flexCenter}>
                  {value === "one-way" ? "One way" : "Round trip"}
                </Box>
              );
            }}
          >
            <MenuItem value="one-way">One way</MenuItem>
            <MenuItem value="round-trip">Round trip</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small">
          <Select
            value={flightClass}
            onChange={handleFlightClassChange}
            displayEmpty
            sx={styles.select}
            renderValue={(value) => {
              if (!value) {
                return <Box sx={styles.flexCenter}>Select Class</Box>;
              }
              return (
                <Box sx={styles.flexCenter}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Box>
              );
            }}
          >
            <MenuItem value="economy">Economy</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="first-class">First Class</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small">
          <Select
            value={tripType}
            onChange={handleTripTypeChange}
            displayEmpty
            sx={styles.select}
            renderValue={(value) => {
              if (!value) {
                return <Box sx={styles.flexCenter}>Select Trip</Box>;
              }
              return (
                <Box sx={styles.flexCenter}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Box>
              );
            }}
          >
            <MenuItem value="domestic">Domestic</MenuItem>
            <MenuItem value="international">International</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      {/* Row 2: Search Controls */}
      <Stack direction="row" spacing={1} alignItems="stretch">
        <TextField
          placeholder="From"
          variant="outlined"
          sx={styles.textFieldFlex12}
          InputProps={{
            startAdornment: <FlightTakeoffIcon sx={styles.iconMarginRight} />,
            sx: styles.textFieldInputProps,
          }}
        />

        <Box sx={styles.flexCenter}>
          <IconButton size="large" sx={styles.iconButton}>
            <SyncAltIcon sx={styles.syncIcon} />
          </IconButton>
        </Box>

        <TextField
          placeholder="To"
          variant="outlined"
          sx={styles.textFieldFlex12}
          size="medium"
          InputProps={{
            startAdornment: <FlightLandingIcon sx={styles.iconMarginRight} />,
            sx: styles.textFieldInputPropsNoHeight,
          }}
        />

        <TextField
          label="Departure"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          sx={styles.textFieldFlex1}
          InputProps={{
            sx: styles.textFieldInputProps,
          }}
        />
        <TextField
          label="Returning"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          sx={styles.textFieldFlex1}
          InputProps={{
            sx: styles.textFieldInputProps,
          }}
        />

        <TextField
          placeholder="Travellers"
          variant="outlined"
          sx={styles.textFieldFlex12}
          InputProps={{
            startAdornment: <PersonIcon sx={styles.personIcon} />,
            sx: styles.textFieldInputProps,
          }}
        />

        <Button
          variant="contained"
          color="primary"
          startIcon={<SearchIcon />}
          sx={styles.searchButton}
        >
          Search
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
    color: "text.secondary",
    fontWeight: 500,
    fontSize: "0.875rem",
    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      pr: "14px !important",
    },
  },
  flexCenter: { display: "flex", alignItems: "center" },
  textFieldFlex12: { flex: 1.2 },
  textFieldFlex1: { flex: 1 },
  iconMarginRight: { mr: 1, color: "#888" },
  personIcon: { mr: 1, color: "#888", fontSize: 20 },
  textFieldInputProps: {
    height: "56px",
  },
  textFieldInputPropsNoHeight: {},
  iconButton: {
    bgcolor: "#F5F0FF",
    color: "primary.main",
    borderRadius: 1,
    "&:hover": { bgcolor: "#EDE7F6" },
  },
  syncIcon: { fontSize: 20 },
  searchButton: {
    height: "56px",
    px: 4,
    fontSize: "1rem",
    boxShadow: "none",
  },
};
