'use client';
import * as React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function Header() {
  return (
    <Paper 
      elevation={0}
      component="header"
      sx={{ 
        height: '84px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        bgcolor: 'background.paper',
        boxShadow: '0px 4px 4px 0px #8D8D8D40',
        borderRadius: 0,
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        width: '100%'
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 800, 
          color: 'primary.main',
          letterSpacing: '-0.02em',
          cursor: 'pointer'
        }}
        onClick={() => window.location.href = '/'}
      >
        GlobGoer
      </Typography>
    </Paper>
  );
}
