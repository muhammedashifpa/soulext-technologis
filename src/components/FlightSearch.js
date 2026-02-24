'use client';
import React, { useState } from 'react';
import { 
  Box, 
  Stack, 
  Button, 
  TextField, 
  IconButton,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import SearchIcon from '@mui/icons-material/Search';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandingIcon from '@mui/icons-material/FlightLand';
import PersonIcon from '@mui/icons-material/Person';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

export default function FlightSearch() {
  const [flightType, setFlightType] = useState('');
  const [flightClass, setFlightClass] = useState('');
  const [tripType, setTripType] = useState('');
  const [departureDate, setDepartureDate] = useState(dayjs());
  const [returnDate, setReturnDate] = useState(dayjs().add(7, 'day'));

  const handleFlightTypeChange = (event) => setFlightType(event.target.value);
  const handleFlightClassChange = (event) => setFlightClass(event.target.value);
  const handleTripTypeChange = (event) => setTripType(event.target.value);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        {/* Row 1: Dropdowns */}
        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
          <FormControl size="small">
            <Select
              value={flightType}
              onChange={handleFlightTypeChange}
              displayEmpty
              sx={{
                minWidth: 140,
                height: 40,
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: '0.875rem',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#A1B0CC' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                '& .MuiSelect-select': { display: 'flex', alignItems: 'center', pr: '14px !important' }
              }}
              renderValue={(value) => {
                if (!value) {
                  return <Box sx={{ display: 'flex', alignItems: 'center' }}>Select Flights</Box>;
                }
                return (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {value === 'one-way' ? 'One way' : 'Round trip'}
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
              sx={{
                minWidth: 140,
                height: 40,
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: '0.875rem',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#A1B0CC' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                '& .MuiSelect-select': { display: 'flex', alignItems: 'center', pr: '14px !important' }
              }}
              renderValue={(value) => {
                if (!value) {
                  return <Box sx={{ display: 'flex', alignItems: 'center' }}>Select Class</Box>;
                }
                return (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
              sx={{
                minWidth: 140,
                height: 40,
                color: 'text.secondary',
                fontWeight: 500,
                fontSize: '0.875rem',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#A1B0CC' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                '& .MuiSelect-select': { display: 'flex', alignItems: 'center', pr: '14px !important' }
              }}
              renderValue={(value) => {
                if (!value) {
                  return <Box sx={{ display: 'flex', alignItems: 'center' }}>Select Trip</Box>;
                }
                return (
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            sx={{ flex: 1.2 }}
            InputProps={{
              startAdornment: <FlightTakeoffIcon sx={{ mr: 1, color: '#888' }} />,
              sx: { 
                height: '56px',
                bgcolor: 'white',
                '& fieldset': { borderColor: '#A1B0CC' }
              }
            }}
          />
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton 
            size='large'
              sx={{ 
                bgcolor: '#F5F0FF', 
                color: 'primary.main',
                borderRadius: 1,
                // height: '56px',
                // width: '40px',
                '&:hover': { bgcolor: '#EDE7F6' }
              }}
            >
              <SyncAltIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>

          <TextField
            placeholder="To"
            variant="outlined"
            sx={{ flex: 1.2 }}
            size='medium'
            InputProps={{
              startAdornment: <FlightLandingIcon sx={{ mr: 1, color: '#888' }} />,
              sx: { 
                bgcolor: 'white',
                '& fieldset': { borderColor: '#A1B0CC' }
              }
            }}
          />

          <DatePicker
            label="Departure"
            value={departureDate}
            onChange={(newValue) => setDepartureDate(newValue)}
            sx={{ flex: 1 }}
            slotProps={{
              textField: {
                variant: 'outlined',
                InputProps: {
                  sx: { 
                    '& fieldset': { borderColor: '#A1B0CC' }
                  }
                }
              }
            }}
          />
          <DatePicker
            label="Returning"
            value={returnDate}
            onChange={(newValue) => setReturnDate(newValue)}
            sx={{ flex: 1 }}
            slotProps={{
              textField: {
                variant: 'outlined',
                InputProps: {
                  sx: { 
                    bgcolor: 'white',
                    '& fieldset': { borderColor: '#A1B0CC' }
                  }
                }
              }
            }}
          />

          <TextField
            placeholder="Travellers"
            variant="outlined"
            sx={{ flex: 1.2 }}
            InputProps={{
              startAdornment: <PersonIcon sx={{ mr: 1, color: '#888', fontSize: 20 }} />,
              sx: { 
                height: '56px',
                bgcolor: 'white',
                '& fieldset': { borderColor: '#A1B0CC' }
              }
            }}
          />

          <Button
            variant="contained"
            color="primary"
            startIcon={<SearchIcon />}
            sx={{
              height: '56px',
              px: 4,
              borderRadius: 1,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: 'none'
            }}
          >
            Search
          </Button>
        </Stack>
      </Box>
    </LocalizationProvider>
  );
}
