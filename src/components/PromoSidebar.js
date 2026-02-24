import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const PromoSidebar = () => {
  const promoCards = [
    {
      title: "International Guideline",
      description:
        "COVID safety measures adopted by various countries including VISA restrictions, quarantine rules, etc.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
      buttonText: "View guidelines",
    },
    {
      title: "We've found you a great deal!",
      description:
        "Get more, spend less with up to $575 off when you book your flight + stay together,",
      image:
        "https://images.unsplash.com/photo-1607083206305-c1507293c48a?q=80&w=2070&auto=format&fit=crop",
      buttonText: "Shop flight",
    },
    {
      title: "Log-in and get exclusive discounts!",
      description:
        "Log in and Unlock all the exclusive offers and use wallet etc",
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2030&auto=format&fit=crop",
      buttonText: "Login/Create Account",
    },
  ];

  return (
    <Stack component="aside" spacing={3} sx={styles.stackContainer}>
      {promoCards.map((card, index) => (
        <Card key={index} sx={styles.card}>
          <CardMedia
            component="img"
            height="160"
            image={card.image}
            alt={card.title}
          />
          <CardContent sx={styles.cardContent}>
            <Typography variant="subtitle1" sx={styles.cardTitle}>
              {card.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={styles.cardDescription}
            >
              {card.description}
            </Typography>
            <Button variant="outlined" fullWidth color="primary">
              {card.buttonText}
            </Button>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default PromoSidebar;

const styles = {
  stackContainer: { minWidth: 256 },
  cardContent: { p: 2 },
  cardTitle: { fontWeight: 700, mb: 1, lineHeight: 1.2 },
  cardDescription: { mb: 2, lineHeight: 1.4 },
};
