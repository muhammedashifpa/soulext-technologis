import * as React from 'react';
import { Box, Typography, Container, Stack, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        bgcolor: '#A27443', 
        color: '#ffffff',
        borderTop: 'none'
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
        >
          {/* Left Side: Icons + Brand */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Stack direction="row" spacing={1}>
              <TwitterIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
              <InstagramIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
              <FacebookIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
            </Stack>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 800, 
                ml: 2,
                letterSpacing: '-0.02em',
                fontSize: '1.5rem'
              }}
            >
              GlobGoer
            </Typography>
          </Stack>

          {/* Right Side: Copyright */}
          <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 500 }}>
            © 2023 GlobGoer Inc.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

