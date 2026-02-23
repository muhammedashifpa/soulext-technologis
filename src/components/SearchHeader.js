'use client';
import * as React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import FlightSearch from './FlightSearch';

export default function SearchHeader() {
  return (
    <Paper 
      component="header"
      elevation={0}
      sx={{ 
        width: '100%',
        maxWidth: '1200px',
        bgcolor: 'background.paper',
        borderRadius: 0,
        overflow: 'hidden',
      }}
    >
      
      <Box sx={{ py: 4 }}>
        <FlightSearch />
      </Box>
    </Paper>
  );
}
