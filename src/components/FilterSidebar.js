import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const FilterRow = ({ label, price, defaultChecked = false }) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    sx={styles.filterRowContainer}
  >
    <FormControlLabel
      control={<Checkbox size="small" defaultChecked={defaultChecked} />}
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

const FilterSidebar = () => {
  return (
    <Paper variant="outlined" sx={styles.sidebarPaper}>
      <Box sx={styles.sidebarContent}>
        <Typography variant="h6" sx={styles.filterByTitle}>
          Filter By
        </Typography>

        <Box sx={styles.sectionContainer}>
          <FilterSectionHeader title="Stop" />
          <FormGroup sx={styles.formGroup}>
            <FilterRow label="Nonstop(23)" price="$110" />
            <FilterRow label="1 Stop (4)" price="$324" />
            <FilterRow label="2+ Stops (2)" price="$349" />
          </FormGroup>
        </Box>

        <Divider sx={styles.divider} />

        <Box sx={styles.sectionContainer}>
          <FilterSectionHeader title="Airlines" />
          <FormGroup sx={styles.formGroup}>
            <FilterRow label="ABC Air Technologies" price="$203" />
            <FilterRow label="ABC Airlines" price="$160" />
            <FilterRow label="XYZ Airways" price="$212" />
            <FilterRow label="BOP Links" price="$129" />
            <FilterRow label="EDF Express" price="$190" />
          </FormGroup>
        </Box>

        <Divider sx={styles.divider} />

        <Box sx={styles.sectionContainer}>
          <FilterSectionHeader title="Travel and Baggage" />
          <FormGroup sx={styles.formGroup}>
            <FilterRow label="Carry-on bag" price="$129" />
            <FilterRow label="Checked bag" price="$99" />
          </FormGroup>
        </Box>

        <Divider sx={styles.divider} />

        <Box sx={styles.buttonContainer}>
          <Button variant="text" fullWidth sx={styles.resetButton}>
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
  sidebarPaper: {
    overflow: "hidden",
  },
  sidebarContent: { p: 2 },
  filterByTitle: { fontWeight: 600, mb: 2 },
  sectionContainer: { mb: 3 },
  formGroup: { gap: 1 },
  divider: { mb: 3, mx: -2 },
  buttonContainer: { display: "flex", gap: 2, alignItems: "center" },
  resetButton: { flex: 0.7 },
  applyButton: { flex: 1 },
};
