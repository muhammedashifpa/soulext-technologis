'use client';
import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#5d36af',
      light: '#ede7f6',
    },
    secondary: {
      main: '#e07b39',
    },
    success: {
      main: '#27ae60',
    },
    error: {
      main: '#eb5757',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#222222',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    fontSize: 14,
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 700,
    },
    subtitle2: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'sticky',
      },
      styleOverrides: {
        root: {
          backgroundColor: '#5d36af',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          padding: '8px 20px',
        },
        containedPrimary: {
          backgroundColor: '#5d36af',
          '&:hover': {
            backgroundColor: '#4a2b8c',
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 2,
      },
      styleOverrides: {
        root: {
          boxShadow: '0 4px 4px rgba(141,141,141,.25)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#5d36af',
          '&.Mui-checked': {
            color: '#5d36af',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#5d36af',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#5d36af',
          height: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          '&.Mui-selected': {
            color: '#5d36af',
          },
        },
      },
    },
  },
});

export default theme;
