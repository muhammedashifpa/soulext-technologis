"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Header() {
  return (
    <Paper elevation={0} component="header" sx={styles.headerPaper}>
      <Typography
        variant="h5"
        sx={styles.logoText}
        onClick={() => (window.location.href = "/")}
      >
        GlobGoer
      </Typography>
    </Paper>
  );
}

const styles = {
  headerPaper: {
    height: "84px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "background.paper",
    boxShadow: "0px 4px 4px 0px #8D8D8D40",
    borderRadius: 0,
    position: "sticky",
    top: 0,
    zIndex: 1100,
    width: "100%",
  },
  logoText: {
    fontWeight: 700,
    color: "primary.main",
    letterSpacing: "-0.02em",
    cursor: "pointer",
  },
};
