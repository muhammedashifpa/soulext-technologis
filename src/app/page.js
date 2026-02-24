import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import SearchHeader from "@/components/SearchHeader";
import FilterSidebar from "@/components/FilterSidebar";
import FlightResults from "@/components/FlightResults";
import PromoSidebar from "@/components/PromoSidebar";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container
          sx={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <SearchHeader />
        </Container>
      </Box>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "280px 1fr 256px",
            gap: "24px",
            maxWidth: "1340px",
            margin: "0 auto",
            padding: "32px",
            alignItems: "start",
            minHeight: "100vh",
          }}
        >
          <FilterSidebar />
          <FlightResults />
          <PromoSidebar />
        </Box>
      </Box>
    </>
  );
}
