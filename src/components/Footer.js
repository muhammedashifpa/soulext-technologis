import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <Box component="footer" sx={styles.footerBox}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Left Side: Icons + Brand */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={1}>
              <TwitterIcon sx={styles.socialIcon} />
              <InstagramIcon sx={styles.socialIcon} />
              <FacebookIcon sx={styles.socialIcon} />
            </Stack>
            <Typography variant="h5" sx={styles.brandText}>
              GlobGoer
            </Typography>
          </Stack>

          {/* Right Side: Copyright */}
          <Typography variant="body2" sx={styles.copyrightText}>
            © 2023 GlobGoer Inc.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

const styles = {
  footerBox: {
    py: 3,
    px: 2,
    bgcolor: "#A27443",
    color: "#ffffff",
    borderTop: "none",
  },
  socialIcon: {
    fontSize: 20,
    cursor: "pointer",
  },
  brandText: {
    fontWeight: 800,
    ml: 2,
    letterSpacing: "-0.02em",
    fontSize: "1.5rem",
  },
  copyrightText: {
    opacity: 0.9,
    fontWeight: 500,
  },
};
