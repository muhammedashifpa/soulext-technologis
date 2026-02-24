"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FlightIcon from "@mui/icons-material/Flight";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import Boltcon from "@mui/icons-material/Bolt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const FlightResults = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box component="section">
      <Paper elevation={0} sx={styles.paperBorderBottom}>
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
                <Box sx={styles.tabLabelStack}>
                  <Typography variant="body2" sx={styles.tabLabelTitle}>
                    Recommended
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={styles.tabLabelDesc}
                  >
                    $500 - 10h 20m
                  </Typography>
                </Box>
              </Stack>
            }
          />
          <Tab
            label={
              <Stack direction="row" spacing={2} alignItems="center">
                <Boltcon sx={{ fontSize: 20, color: "text.primary" }} />
                <Box sx={styles.tabLabelStack}>
                  <Typography variant="body2" sx={styles.tabLabelTitlePrimary}>
                    Fastest
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={styles.tabLabelDesc}
                  >
                    $500 - 10h 20m
                  </Typography>
                </Box>
              </Stack>
            }
          />
          <Tab
            label={
              <Stack direction="row" spacing={2} alignItems="center">
                <LocalOfferIcon sx={{ fontSize: 20, color: "text.primary" }} />
                <Box sx={styles.tabLabelStack}>
                  <Typography variant="body2" sx={styles.tabLabelTitlePrimary}>
                    Cheapest
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={styles.tabLabelDesc}
                  >
                    $500 - 10h 20m
                  </Typography>
                </Box>
              </Stack>
            }
          />
        </Tabs>
      </Paper>

      {[1, 2].map((item) => (
        <Paper key={item} variant="outlined" sx={styles.flightCard}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={styles.cardHeader}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={styles.airlineAvatar}>
                <FlightIcon sx={{ fontSize: 18 }} />
              </Avatar>
              <Typography variant="subtitle1" sx={styles.airlineName}>
                ABC Airline
              </Typography>
            </Stack>
            <Typography variant="body1" color="text.primary">
              Travel Class:{" "}
              <Typography component="span" fontWeight="600">
                Economy
              </Typography>
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3} alignItems="center">
            {/* Left Orange Box */}
            <Box sx={styles.leftOrangeBox}>
              <Box>
                <Typography sx={styles.dateText}>Sun, 29 Jan 2023</Typography>
                <Typography sx={styles.timeText}>14.50</Typography>
                <Typography sx={styles.airportText}>
                  Moi Intl, Mombasa
                </Typography>
                <Typography sx={styles.airportText}>Kenya</Typography>
              </Box>

              <Box sx={styles.durationContainer}>
                <Typography sx={styles.durationText}>9hr 50min</Typography>
                <Box sx={styles.lineContainer}>
                  <Box sx={styles.line} />
                  <FlightIcon
                    sx={{ fontSize: 24, color: "#ccc", mx: 1, rotate: "90deg" }}
                  />
                  <Box sx={styles.line} />
                </Box>
              </Box>

              <Box>
                <Typography sx={styles.spacerText}>Spacer</Typography>
                <Typography sx={styles.timeText}>14.50</Typography>
                <Typography sx={styles.airportText}>
                  JFK Terminal, Nairobi,
                </Typography>
                <Typography sx={styles.airportText}>Kenya</Typography>
              </Box>
            </Box>

            {/* Right Pricing Box */}
            <Box sx={styles.pricingBox}>
              <Typography sx={styles.priceText}>$18,500</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={styles.bookButton}
                disableElevation
              >
                Book Now
              </Button>
            </Box>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={styles.footerContainer}
          >
            <Typography variant="caption" color="text.secondary">
              100 seats remaining
            </Typography>
            <Typography variant="caption" sx={styles.partiallyRefundable}>
              Partially Refundable
            </Typography>
            <Button
              variant="text"
              size="small"
              color="primary"
              sx={styles.viewDetailsBtn}
            >
              View flight details
            </Button>
          </Stack>
        </Paper>
      ))}
    </Box>
  );
};

export default FlightResults;

const styles = {
  paperBorderBottom: { borderBottom: 1, borderColor: "divider", mb: 3 },
  tabLabelStack: { textAlign: "left" },
  tabLabelTitle: { fontWeight: 600 },
  tabLabelTitlePrimary: {
    fontWeight: 600,
    color: "text.primary",
  },
  flightCard: {
    p: 3,
    mb: 2,
    position: "relative",
    "&:hover": { boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
  },
  cardHeader: { mb: 2 },
  airlineAvatar: { bgcolor: "secondary.light", width: 32, height: 32 },
  airlineName: { fontWeight: 700 },
  leftOrangeBox: {
    flex: 1,
    bgcolor: "#FFF8F2",
    borderRadius: 2,
    p: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateText: {
    fontSize: "12px",
    color: "text.primary",
    display: "block",
    mb: 1.5,
  },
  timeText: {
    fontSize: "18px",
    fontWeight: 600,
    mb: 0.5,
    letterSpacing: "-0.5px",
  },
  airportText: {
    fontSize: "12px",
    fontWeight: 400,
    color: "text.primary",
    display: "block",
  },
  durationContainer: {
    flex: 1,
    px: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  durationText: {
    fontSize: "14px",
    fontWeight: 600,
    color: "text.primary",
    mb: 1,
  },
  lineContainer: { width: "100%", display: "flex", alignItems: "center" },
  line: { flex: 1, height: "1.5px", bgcolor: "#ccc" },
  spacerText: {
    fontSize: "12px",
    color: "text.secondary",
    display: "block",
    mb: 1.5,
    visibility: "hidden",
  },
  pricingBox: {
    width: "160px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  priceText: {
    fontSize: "24px",
    fontWeight: 700,
    mb: 2,
    letterSpacing: "-0.5px",
    textAlign: "center",
    width: "100%",
  },
  bookButton: {
    width: "100%",
    py: 1,
  },
  footerContainer: { mt: 2 },
  partiallyRefundable: { color: "orange", fontWeight: 600 },
  viewDetailsBtn: { fontWeight: 600 },
};
