import React from 'react';
import { 
  Paper, 
  Box, 
  Typography, 
  FormControlLabel, 
  Checkbox, 
  FormGroup,
  Divider,
  Stack,
  Slider,
  Button
} from '@mui/material';

const FilterRow = ({ label, price, defaultChecked = false }) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
    <FormControlLabel 
      control={<Checkbox size="small" defaultChecked={defaultChecked} />} 
      label={<Typography variant="body2">{label}</Typography>} 
      sx={{ m: 0 }}
    />
    <Typography variant="body2">{price}</Typography>
  </Stack>
);

const FilterSectionHeader = ({ title }) => (
  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
      {title}
    </Typography>
    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
      From
    </Typography>
  </Stack>
);

const FilterSidebar = () => {
  return (
    <Paper elevation={0} sx={{ border: '1px solid #eee', borderRadius: 2, overflow: 'hidden' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Filter By
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <FilterSectionHeader title="Stop" />
          <FormGroup sx={{ gap: 1 }}>
            <FilterRow label="Nonstop(23)" price="$110" />
            <FilterRow label="1 Stop (4)" price="$324" />
            <FilterRow label="2+ Stops (2)" price="$349" />
          </FormGroup>
        </Box>

        <Divider sx={{ mb: 3, mx: -2 }} />

        <Box sx={{ mb: 3 }}>
          <FilterSectionHeader title="Airlines" />
          <FormGroup sx={{ gap: 1 }}>
            <FilterRow label="ABC Air Technologies" price="$203" />
            <FilterRow label="ABC Airlines" price="$160" />
            <FilterRow label="XYZ Airways" price="$212" />
            <FilterRow label="BOP Links" price="$129" />
            <FilterRow label="EDF Express" price="$190" />
          </FormGroup>
        </Box>

        <Divider sx={{ mb: 3, mx: -2 }} />

        <Box sx={{ mb: 3 }}>
          <FilterSectionHeader title="Travel and Baggage" />
          <FormGroup sx={{ gap: 1 }}>
            <FilterRow label="Carry-on bag" price="$129" />
            <FilterRow label="Checked bag" price="$99" />
          </FormGroup>
        </Box>

        <Divider sx={{ mb: 3, mx: -2 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
            Departure Time
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Mon 5:00 AM - Tue 12:00 AM
          </Typography>
          <Slider
            defaultValue={[20, 60]}
            step={5}
            sx={{
                  "--Slider-valueLabelArrowSize": "16px",
                  "--Slider-markSize": "6px",
                  "--Slider-trackSize": "8px",
                  "--Slider-thumbSize": "18px",
                  "--Slider-thumbWidth": "18px"
                }}
            marks={[
              { value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }
            ]}
          />
        </Box>

        <Divider sx={{ mb: 3, mx: -2 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
            Arrival Time
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Mon 5:00 AM - Tue 12:00 AM
          </Typography>
          <Slider
            defaultValue={[25, 60]}
            step={5}
            sx={{
                  "--Slider-valueLabelArrowSize": "16px",
                  "--Slider-markSize": "6px",
                  "--Slider-trackSize": "8px",
                  "--Slider-thumbSize": "18px",
                  "--Slider-thumbWidth": "18px"
                }}
            marks={[
              { value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }
            ]}
          />
        </Box>

        <Divider sx={{ mb: 3, mx: -2 }} />

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button 
            variant="text" 
            fullWidth 
            sx={{ 
              flex: 0.7,
            }}
          >
            Reset
          </Button>
          <Button 
            variant="contained" 
            fullWidth 
            disableElevation
            sx={{ 
              textTransform: 'none', 
              flex: 1,
              fontWeight: 600,
              borderRadius: 1.5
            }}
          >
            Apply Filters
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default FilterSidebar;
