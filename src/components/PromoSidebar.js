import React from 'react';
import { 
  Stack, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button,
  Box
} from '@mui/material';

const PromoSidebar = () => {
  const promoCards = [
    {
      title: 'International Guideline',
      description: 'COVID safety measures adopted by various countries including VISA restrictions, quarantine rules, etc.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
      buttonText: 'View guidelines'
    },
    {
      title: "We've found you a great deal!",
      description: 'Get more, spend less with up to $575 off when you book your flight + stay together,',
      image: 'https://images.unsplash.com/photo-1607083206305-c1507293c48a?q=80&w=2070&auto=format&fit=crop',
      buttonText: 'Shop flight'
    },
    {
      title: 'Log-in and get exclusive discounts!',
      description: 'Log in and Unlock all the exclusive offers and use wallet etc',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2030&auto=format&fit=crop',
      buttonText: 'Login/Create Account'
    }
  ];

  return (
    <Stack component="aside" spacing={3} sx={{ minWidth: 256 }}>
      {promoCards.map((card, index) => (
        <Card key={index} elevation={0} sx={{ border: '1px solid #eee', borderRadius: 2 }}>
          <CardMedia
            component="img"
            height="160"
            image={card.image}
            alt={card.title}
          />
          <CardContent sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.2 }}>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.4 }}>
              {card.description}
            </Typography>
            <Button 
              variant="outlined" 
              fullWidth 
              color="primary" 
              sx={{ 
                borderRadius: 1.5, 
                textTransform: 'none', 
                fontWeight: 600,
                borderColor: 'primary.main',
                '&:hover': { borderColor: 'primary.dark', bgcolor: 'rgba(98, 0, 238, 0.04)' }
              }}
            >
              {card.buttonText}
            </Button>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default PromoSidebar;
