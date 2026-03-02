"use client";
import React, { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stack from "@mui/material/Stack";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Paper from "@mui/material/Paper";

import { useFlightStore, sortFlights } from "@/store/useFlightStore";
import { SORT_BY } from "@/constants/flightConstants";
import { PaginatedFlightResults } from "./PaginatedFlightResults";

const FlightResults = () => {
  const [tabValue, setTabValue] = useState(0);

  const { filteredFlights, sortBy, setSortBy } = useFlightStore();

  // Sort inline — fast for 200 flights, no pre-computation needed
  const currentFlights = useMemo(
    () => sortFlights(filteredFlights, sortBy),
    [filteredFlights, sortBy],
  );

  // Best price + duration for each tab header
  const tabSummary = (tabSortBy) => {
    const sorted = sortFlights(filteredFlights, tabSortBy);
    if (!sorted.length) return "—";
    return `$${sorted[0].price.toLocaleString()} · ${sorted[0].durationText}`;
  };

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
    const sortOptions = [
      SORT_BY.RECOMMENDED,
      SORT_BY.FASTEST,
      SORT_BY.CHEAPEST,
    ];
    setSortBy(sortOptions[newValue]);
  };

  return (
    <Box component="section">
      <Paper elevation={0} sx={styles.paperBorderBottom}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab
            label={
              <Stack direction="row" spacing={2} alignItems="center">
                <ThumbUpAltIcon sx={{ fontSize: 20 }} />
                <Box sx={styles.tabLabelStack}>
                  <Typography variant="body2" sx={styles.tabLabelTitle}>
                    Recommended
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={styles.tabLabelDesc}
                  >
                    {tabSummary(SORT_BY.RECOMMENDED)}
                  </Typography>
                </Box>
              </Stack>
            }
          />
          <Tab
            label={
              <Stack direction="row" spacing={2} alignItems="center">
                <BoltIcon sx={{ fontSize: 20, color: "text.primary" }} />
                <Box sx={styles.tabLabelStack}>
                  <Typography variant="body2" sx={styles.tabLabelTitlePrimary}>
                    Fastest
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={styles.tabLabelDesc}
                  >
                    {tabSummary(SORT_BY.FASTEST)}
                  </Typography>
                </Box>
              </Stack>
            }
          />
          <Tab
            label={
              <Stack direction="row" spacing={2} alignItems="center">
                <LocalOfferIcon sx={{ fontSize: 20, color: "text.primary" }} />
                <Box sx={styles.tabLabelStack}>
                  <Typography variant="body2" sx={styles.tabLabelTitlePrimary}>
                    Cheapest
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={styles.tabLabelDesc}
                  >
                    {tabSummary(SORT_BY.CHEAPEST)}
                  </Typography>
                </Box>
              </Stack>
            }
          />
        </Tabs>
      </Paper>
      <PaginatedFlightResults currentFlights={currentFlights} />
    </Box>
  );
};

export default FlightResults;

const styles = {
  paperBorderBottom: { borderBottom: 1, borderColor: "divider", mb: 3 },
  tabLabelStack: { textAlign: "left" },
  tabLabelTitle: { fontWeight: 600 },
  tabLabelTitlePrimary: { fontWeight: 600, color: "text.primary" },
  flightCard: {
    p: 3,
    mb: 2,
    position: "relative",
    "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
  },
  cardHeader: { mb: 2 },
  airlineAvatar: { bgcolor: "secondary.light", width: 32, height: 32 },
  airlineName: { fontWeight: 700 },
  leftOrangeBox: {
    flex: 1,
    bgcolor: "#FFF8F2",
    borderRadius: 2,
    p: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateText: {
    fontSize: "12px",
    color: "text.primary",
    display: "block",
    mb: 1.5,
  },
  timeText: {
    fontSize: "18px",
    fontWeight: 600,
    mb: 0.5,
    letterSpacing: "-0.5px",
  },
  airportText: {
    fontSize: "12px",
    fontWeight: 400,
    color: "text.primary",
    display: "block",
  },
  durationContainer: {
    flex: 1,
    px: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  durationText: {
    fontSize: "14px",
    fontWeight: 600,
    color: "text.primary",
    mb: 1,
  },
  lineContainer: { width: "100%", display: "flex", alignItems: "center" },
  line: { flex: 1, height: "1.5px", bgcolor: "#ccc" },
  spacerText: {
    fontSize: "12px",
    color: "transparent",
    display: "block",
    mb: 1.5,
  },
  pricingBox: {
    width: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  priceText: {
    fontSize: "24px",
    fontWeight: 700,
    mb: 2,
    letterSpacing: "-0.5px",
    textAlign: "center",
    width: "100%",
  },
  bookButton: { width: "100%", py: 1 },
  footerContainer: { mt: 2 },
  refundableText: { fontWeight: 600 },
  viewDetailsBtn: { fontWeight: 600 },
};
