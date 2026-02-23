import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MaterialUILink from '@mui/material/Link';
import NextLink from '@/components/Link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

import SearchHeader from '@/components/SearchHeader';

export default function Home() {
  return (
    <>
    <Box 
      sx={{ 
        bgcolor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container   sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <SearchHeader />
      </Container>
    </Box>
    "dfasdfa"
    </>
  );
}

