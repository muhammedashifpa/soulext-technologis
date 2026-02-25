"use client";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FlightSearch from "./FlightSearch";

export default function SearchHeader() {
  return (
    <Paper component="header" elevation={0} sx={styles.headerCard}>
      <Box sx={styles.searchContainer}>
        <FlightSearch />
      </Box>
    </Paper>
  );
}

const styles = {
  headerCard: {
    width: "100%",
    maxWidth: "1200px",
    bgcolor: "background.paper",
    borderRadius: 0,
    overflow: "hidden",
  },
  searchContainer: {
    py: 4,
  },
};
