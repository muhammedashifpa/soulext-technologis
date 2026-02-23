"use client";
import React from 'react';
import { 
  Box, 
  Typography,
  Paper,
  Tabs, 
  Tab,
  Button, 
  Divider,
  Avatar,
  Stack
} from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Boltcon from '@mui/icons-material/Bolt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const FlightResults = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box component="section">
      <Paper elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
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
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, textTransform: 'none' }}>Recommended</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'none' }}>$500 - 10h 20m</Typography>
                </Box>
              </Stack>
            } 
          />
          <Tab 
            label={
              <Stack direction="row" spacing={2} alignItems="center">
                <Boltcon sx={{ fontSize: 20, color: 'text.primary' }} />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', textTransform: 'none' }}>Fastest</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'none' }}>$500 - 10h 20m</Typography>
                </Box>
              </Stack>
            } 
          />
          <Tab 
            label={
              <Stack direction="row" spacing={2} alignItems="center">
                <LocalOfferIcon sx={{ fontSize: 20, color: 'text.primary' }} />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', textTransform: 'none' }}>Cheapest</Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'none' }}>$500 - 10h 20m</Typography>
                </Box>
              </Stack>
            } 
          />
        </Tabs>
      </Paper>

      {[1, 2].map((item) => (
        <Paper 
          key={item} 
          elevation={0} 
          sx={{ 
            p: 3, 
            mb: 2, 
            border: '1px solid #eee', 
            borderRadius: 2,
            position: 'relative',
            '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ bgcolor: 'secondary.light', width: 32, height: 32 }}>
                <FlightIcon sx={{ fontSize: 18 }} />
              </Avatar>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                ABC Airline
              </Typography>
            </Stack>
            <Typography variant="body1" color="text.primary">
              Travel Class: <Typography component="span" fontWeight="600">Economy</Typography>
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3} alignItems="center">
            {/* Left Orange Box */}
            <Box sx={{ 
              flex: 1, 
              bgcolor: '#FFF8F2', 
              borderRadius: 2, 
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Box>
                <Typography sx={{ fontSize: '12px', color: 'text.primary', display: 'block', mb: 1.5 }}>
                  Sun, 29 Jan 2023
                </Typography>
                <Typography sx={{ fontSize: '18px', fontWeight: 600, mb: 0.5, letterSpacing: '-0.5px' }}>14.50</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: 'text.primary', display: 'block' }}>Moi Intl, Mombasa</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: 'text.primary', display: 'block' }}>Kenya</Typography>
              </Box>
              
              <Box sx={{ flex: 1, px: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 600, color: 'text.primary', mb: 1 }}>9hr 50min</Typography>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ flex: 1, height: '1.5px', bgcolor: '#ccc' }} />
                  <FlightIcon sx={{ fontSize: 24, color: '#ccc', mx: 1, rotate: '90deg' }} />
                  <Box sx={{ flex: 1, height: '1.5px', bgcolor: '#ccc' }} />
                </Box>
              </Box>

              <Box>
                <Typography sx={{ fontSize: '12px', color: 'text.secondary', display: 'block', mb: 1.5, visibility: 'hidden' }}>
                  Spacer
                </Typography>
                <Typography sx={{ fontSize: '18px', fontWeight: 600, mb: 0.5, letterSpacing: '-0.5px' }}>14.50</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: 'text.primary', display: 'block' }}>JFK Terminal, Nairobi,</Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: 400, color: 'text.primary', display: 'block' }}>Kenya</Typography>
              </Box>
            </Box>

            {/* Right Pricing Box */}
            <Box sx={{ width: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: 2, letterSpacing: '-0.5px', textAlign: 'center', width: '100%' }}>
                $18,500
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                sx={{ 
                  borderRadius: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  width: '100%',
                  py: 1
                }}
                disableElevation
              >
                Book Now
              </Button>
            </Box>
          </Stack>

          {/* <Divider sx={{ my: 2, borderStyle: 'dashed' }} /> */}

          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
            <Typography variant="caption" color="text.secondary">
              100 seats remaining
            </Typography>
            <Typography variant="caption" sx={{ color: 'orange', fontWeight: 600 }}>
              Partially Refundable
            </Typography>
            <Button variant="text" size="small" color="primary" sx={{ fontWeight: 600 }}>
              View flight details
            </Button>
          </Stack>
        </Paper>
      ))}
    </Box>
  );
};

export default FlightResults;
