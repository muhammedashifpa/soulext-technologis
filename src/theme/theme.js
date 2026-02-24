"use client";
import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const palette = {
  mode: "light",
  primary: {
    main: "#5d36af",
    light: "#ede7f6",
  },
  secondary: {
    main: "#e07b39",
  },
  success: {
    main: "#27ae60",
  },
  error: {
    main: "#eb5757",
  },
  background: {
    default: "#F3F3F3",
    paper: "#ffffff",
  },
  text: {
    primary: "#222222",
    secondary: "#666666",
  },
};

const theme = createTheme({
  cssVariables: true,
  palette,
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
      textTransform: "none",
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
        position: "sticky",
      },
      styleOverrides: {
        root: {
          backgroundColor: palette.primary.main,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          padding: "8px 20px",
          borderRadius: 4,
          textTransform: "none",
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: palette.primary.main,
          "&:hover": {
            backgroundColor: "#4a2b8c",
          },
        },
        outlinedPrimary: {
          borderColor: palette.primary.main,
          "&:hover": {
            borderColor: "#4a2b8c",
            backgroundColor: "rgba(93, 54, 175, 0.04)",
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          borderColor: "#eee",
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderColor: "#eee",
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff",
            "& fieldset": {
              borderColor: "#A1B0CC",
            },
            "&:hover fieldset": {
              borderColor: palette.primary.main,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: palette.primary.main,
          "&.Mui-checked": {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: palette.primary.main,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: palette.primary.main,
          height: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          "&.Mui-selected": {
            color: palette.primary.main,
          },
        },
      },
    },
  },
});

export default theme;
