"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useFlightStore } from "@/store/useFlightStore";

const FilterRow = ({ label, price, checked, onChange }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={styles.filterRowContainer}
  >
    <FormControlLabel
      control={<Checkbox size="small" checked={checked} onChange={onChange} />}
      label={<Typography variant="body2">{label}</Typography>}
      sx={styles.filterRowLabel}
    />
    <Typography variant="body2">{price}</Typography>
  </Stack>
);

const FilterSectionHeader = ({ title }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={styles.sectionHeaderContainer}
  >
    <Typography variant="subtitle2" sx={styles.sectionHeaderTitle}>
      {title}
    </Typography>
    <Typography variant="subtitle2" sx={styles.sectionHeaderTitle}>
      From
    </Typography>
  </Stack>
);

const FilterSection = ({ title, items, activeValues, onToggle, category }) => (
  <Box sx={styles.sectionContainer}>
    <FilterSectionHeader title={title} />
    <FormGroup sx={styles.formGroup}>
      {items.map((item) => (
        <FilterRow
          key={item.value}
          label={
            item.count != null ? `${item.label} (${item.count})` : item.label
          }
          price={item.minPrice}
          checked={activeValues.includes(item.value)}
          onChange={() => onToggle(category, item.value)}
        />
      ))}
    </FormGroup>
  </Box>
);

const FilterSidebar = () => {
  const { filterMeta, filters, toggleFilter, resetFilters } = useFlightStore();

  return (
    <Paper variant="outlined" sx={styles.sidebarPaper}>
      <Box sx={styles.sidebarContent}>
        <Typography variant="h6" sx={styles.filterByTitle}>
          Filter By
        </Typography>

        <FilterSection
          title="Stop"
          items={filterMeta.stops}
          activeValues={filters.stops}
          onToggle={toggleFilter}
          category="stops"
        />
        <Divider sx={styles.divider} />
        <FilterSection
          title="Airlines"
          items={filterMeta.airlines}
          activeValues={filters.airlines}
          onToggle={toggleFilter}
          category="airlines"
        />
        <Divider sx={styles.divider} />
        <FilterSection
          title="Travel and Baggage"
          items={filterMeta.baggage}
          activeValues={filters.baggage}
          onToggle={toggleFilter}
          category="baggage"
        />
        <Divider sx={styles.divider} />

        <Box sx={styles.buttonContainer}>
          <Button
            variant="text"
            fullWidth
            sx={styles.resetButton}
            onClick={resetFilters}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            fullWidth
            disableElevation
            sx={styles.applyButton}
          >
            Apply Filters
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default FilterSidebar;

const styles = {
  filterRowContainer: { width: "100%" },
  filterRowLabel: { m: 0 },
  sectionHeaderTitle: { fontWeight: 600 },
  sectionHeaderContainer: { mb: 1 },
  sidebarPaper: { overflow: "hidden" },
  sidebarContent: { p: 2 },
  filterByTitle: { fontWeight: 600, mb: 2 },
  sectionContainer: { mb: 3 },
  formGroup: { gap: 1 },
  divider: { mb: 3, mx: -2 },
  buttonContainer: { display: "flex", gap: 2, alignItems: "center" },
  resetButton: { flex: 0.7 },
  applyButton: { flex: 1 },
};
