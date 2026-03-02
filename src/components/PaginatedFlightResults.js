import { calculateTotalPages, paginateFlights } from "@/store/useFlightStore";
import React, { useMemo, useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import FlightIcon from "@mui/icons-material/Flight";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { REFUNDABLE_STATUS } from "@/constants/flightConstants";

const refundableColor = (status) => {
  if (status === REFUNDABLE_STATUS.FULLY) return "#198754";
  if (status === REFUNDABLE_STATUS.NON) return "#EB5757";
  if (status === REFUNDABLE_STATUS.PARTIALLY) return "#FD7E14";
  return "#000000";
};

const ITEM_PER_PAGE = 5;
export const PaginatedFlightResults = ({ currentFlights }) => {
  //Finding total pages with 10 flights per page.
  const numberOfPages = calculateTotalPages(
    currentFlights.length,
    ITEM_PER_PAGE,
  );
  const [activePage, setActivePage] = useState(1);

  const activePageFlights = useMemo(() => {
    return paginateFlights(currentFlights, ITEM_PER_PAGE, activePage);
  }, [activePage]);

  const handleChange = (event, value) => {
    setActivePage(value);
  };
  return (
    <>
      {activePageFlights.map((flight) => (
        <Paper key={flight.id} variant="outlined" sx={styles.flightCard}>
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
                {flight.airlineName}
              </Typography>
            </Stack>
            <Typography variant="body1" color="text.primary">
              Travel Class:{" "}
              <Typography component="span" fontWeight="600">
                {flight.travelClass}
              </Typography>
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3} alignItems="center">
            {/* Flight route + timing */}
            <Box sx={styles.leftOrangeBox}>
              <Box>
                <Typography sx={styles.dateText}>
                  {flight.departureDate}
                </Typography>
                <Typography sx={styles.timeText}>
                  {flight.departureTime}
                </Typography>
                <Typography sx={styles.airportText}>
                  {flight.departure.city}
                </Typography>
                <Typography sx={styles.airportText}>
                  {flight.departure.country}
                </Typography>
              </Box>

              <Box sx={styles.durationContainer}>
                <Typography sx={styles.durationText}>
                  {flight.durationText}
                </Typography>
                <Box sx={styles.lineContainer}>
                  <Box sx={styles.line} />
                  <FlightIcon
                    sx={{ fontSize: 24, color: "#ccc", mx: 1, rotate: "90deg" }}
                  />
                  <Box sx={styles.line} />
                </Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {flight.stops === 0
                    ? "Nonstop"
                    : flight.stops === 1
                      ? "1 Stop"
                      : `${flight.stops} Stops`}
                </Typography>
              </Box>

              <Box>
                <Typography sx={styles.spacerText}>·</Typography>
                <Typography sx={styles.timeText}>
                  {flight.arrivalTime}
                </Typography>
                <Typography sx={styles.airportText}>
                  {flight.arrival.city}
                </Typography>
                <Typography sx={styles.airportText}>
                  {flight.arrival.country}
                </Typography>
              </Box>
            </Box>

            {/* Price + book */}
            <Box sx={styles.pricingBox}>
              <Typography sx={styles.priceText}>
                {flight.formattedPrice}
              </Typography>
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
              {flight.seatsRemaining} seats remaining
            </Typography>
            <Typography
              variant="caption"
              sx={{
                ...styles.refundableText,
                color: refundableColor(flight.refundableStatus),
              }}
            >
              {flight.refundableStatus}
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
      <Pagination
        count={numberOfPages}
        onChange={handleChange}
        page={activePage}
        variant="outlined"
        shape="rounded"
      />
    </>
  );
};

const styles = {
  paperBorderBottom: { borderBottom: 1, borderColor: "divider", mb: 3 },
  tabLabelStack: { textAlign: "left" },
  tabLabelTitle: { fontWeight: 600 },
  tabLabelTitlePrimary: { fontWeight: 600, color: "text.primary" },
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
    color: "transparent",
    display: "block",
    mb: 1.5,
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
  bookButton: { width: "100%", py: 1 },
  footerContainer: { mt: 2 },
  refundableText: { fontWeight: 600 },
  viewDetailsBtn: { fontWeight: 600 },
};
