import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MaterialUILink from '@mui/material/Link';
import NextLink from '@/components/Link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';

import SearchHeader from '@/components/SearchHeader';
import FilterSidebar from '@/components/FilterSidebar';
import FlightResults from '@/components/FlightResults';
import PromoSidebar from '@/components/PromoSidebar';

export default function Home() {
  return (
    <>
      <Box 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: '280px 1fr 256px',
          gap: '24px',
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '32px',
          alignItems: 'start',
          minHeight: '100vh',
        }}
      >
        <FilterSidebar />
        <FlightResults />
        <PromoSidebar />
      </Box>
    </>
  );
}

