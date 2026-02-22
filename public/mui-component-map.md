# GlobGoer — MUI Component Map

A reference for replacing every HTML component in `globgoer.html` with its Material UI (MUI v6) equivalent.

---

## 1. Navbar

| HTML Element | MUI Component | Props / Notes |
|---|---|---|
| `<nav class="navbar">` | `<AppBar position="sticky">` + `<Toolbar>` | `color="transparent"` + custom `sx` for purple bg |
| Logo text `GlobGoer` | `<Typography variant="h5" fontWeight={700}>` | Inside `<Toolbar>` |
| Nav links | `<Button color="inherit">` × 4 | Wrap in `<Box sx={{ display: 'flex', gap: 4 }}>` |
| Log In button | `<Button variant="outlined" color="inherit">` | |
| Sign Up button | `<Button variant="contained" sx={{ bgcolor: '#fff', color: 'purple' }}>` | |

```jsx
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

<AppBar sx={{ bgcolor: '#5d36af' }}>
  <Toolbar sx={{ justifyContent: 'space-between' }}>
    <Typography variant="h5" fontWeight={700} color="white">GlobGoer</Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button color="inherit">Flights</Button>
      <Button color="inherit">Hotels</Button>
    </Box>
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button variant="outlined" color="inherit">Log In</Button>
      <Button variant="contained" sx={{ bgcolor: 'white', color: '#5d36af' }}>Sign Up</Button>
    </Box>
  </Toolbar>
</AppBar>
```

---

## 2. Search Bar

### 2a. Trip-type Pills (Select flight / Class / Trip)

| HTML Element | MUI Component | Props / Notes |
|---|---|---|
| `<div class="pill">` × 3 | `<ToggleButtonGroup>` + `<ToggleButton>` | `exclusive` prop; or use `<Chip>` with `onClick` |
| Dropdown arrow | `<Select>` inside each pill | `variant="standard"`, remove underline via `disableUnderline` |

```jsx
import { ToggleButtonGroup, ToggleButton, Select, MenuItem } from '@mui/material';

<ToggleButtonGroup exclusive value={tripType} onChange={handleTripType}>
  <ToggleButton value="oneway">One Way</ToggleButton>
  <ToggleButton value="roundtrip">Round Trip</ToggleButton>
  <ToggleButton value="multi">Multi-city</ToggleButton>
</ToggleButtonGroup>
```

### 2b. Text Inputs (From, To, Travellers)

| HTML Element | MUI Component | Props / Notes |
|---|---|---|
| `<input placeholder="From">` | `<TextField>` | `variant="outlined"`, `InputProps={{ startAdornment }}` for icon |
| Swap icon button | `<IconButton>` | `<SwapHorizIcon />` from `@mui/icons-material` |

```jsx
import { TextField, InputAdornment, IconButton } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

<TextField
  placeholder="From"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start"><FlightTakeoffIcon /></InputAdornment>
    ),
  }}
/>
<IconButton><SwapHorizIcon /></IconButton>
```

### 2c. Date Picker (Departing — Returning)

| HTML Element | MUI Component | Notes |
|---|---|---|
| `<input placeholder="Departing — Returning">` | `<DateRangePicker>` | From `@mui/x-date-pickers-pro` |

```jsx
import { DateRangePicker } from '@mui/x-date-pickers-pro';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

<LocalizationProvider dateAdapter={AdapterDayjs}>
  <DateRangePicker localeText={{ start: 'Departing', end: 'Returning' }} />
</LocalizationProvider>
```

### 2d. Search Button

| HTML Element | MUI Component | Props |
|---|---|---|
| `<button class="search-btn">` | `<Button variant="contained" startIcon={<SearchIcon />}>` | `sx={{ bgcolor: '#5d36af' }}` |

---

## 3. Filter Sidebar

| HTML Element | MUI Component | Props / Notes |
|---|---|---|
| `<aside class="filter-sidebar">` | `<Paper elevation={2} sx={{ p: 2.5 }}>` | |
| "Filter By" heading | `<Typography variant="subtitle1" fontWeight={700}>` | |
| Section heading row | `<Typography variant="body2" fontWeight={700}>` + `<Box sx={{ display:'flex', justifyContent:'space-between' }}>` | |
| `<input type="checkbox" />` + label | `<FormControlLabel control={<Checkbox />} label="...">` | `<FormGroup>` as wrapper |
| Price text | `<Typography variant="caption" color="text.secondary">` | |
| `<hr class="divider">` | `<Divider sx={{ my: 1.5 }}>` | |
| `<input type="range">` | `<Slider>` | `min`, `max`, `valueLabelDisplay="auto"` |
| Range label text | `<Typography variant="caption">` | |
| Reset button | `<Button variant="outlined" color="secondary">` | |
| Apply Filters button | `<Button variant="contained">` | `sx={{ bgcolor: '#5d36af' }}` |

```jsx
import { Paper, Typography, FormGroup, FormControlLabel, Checkbox,
         Slider, Divider, Button, Box } from '@mui/material';

<Paper elevation={2} sx={{ p: 2.5 }}>
  <Typography variant="subtitle1" fontWeight={700} mb={2}>Filter By</Typography>

  <Typography variant="body2" fontWeight={700}>Stop</Typography>
  <FormGroup>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <FormControlLabel control={<Checkbox size="small" />} label="Nonstop (23)" />
      <Typography variant="caption">$110</Typography>
    </Box>
    {/* ...more rows */}
  </FormGroup>

  <Divider sx={{ my: 1.5 }} />

  <Typography variant="body2" fontWeight={700}>Departure Time</Typography>
  <Slider min={0} max={24} valueLabelDisplay="auto" />

  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
    <Button variant="outlined" fullWidth>Reset</Button>
    <Button variant="contained" fullWidth sx={{ bgcolor: '#5d36af' }}>Apply Filters</Button>
  </Box>
</Paper>
```

---

## 4. Sorting Row (Recommended / Fastest / Cheapest)

| HTML Element | MUI Component | Props / Notes |
|---|---|---|
| `<div class="sorting-row">` | `<Tabs value={tab} onChange={...}>` | `indicatorColor="primary"` |
| `<div class="sort-tab">` | `<Tab label={<CustomLabel />}>` | Pass custom JSX to `label` prop |

```jsx
import { Tabs, Tab, Box, Typography } from '@mui/material';

function SortLabel({ title, sub }) {
  return (
    <Box textAlign="left">
      <Typography variant="caption" fontWeight={700}>{title}</Typography>
      <Typography variant="caption" display="block" color="text.secondary">{sub}</Typography>
    </Box>
  );
}

<Tabs value={sortTab} onChange={(_, v) => setSortTab(v)}>
  <Tab label={<SortLabel title="Recommended" sub="$100 · 9h 20m" />} />
  <Tab label={<SortLabel title="Fastest"     sub="$500 · 9h 20m" />} />
  <Tab label={<SortLabel title="Cheapest"    sub="$100 · 9h 20m" />} />
</Tabs>
```

---

## 5. Flight Card

| HTML Element | MUI Component | Props / Notes |
|---|---|---|
| `<div class="flight-card">` | `<Card elevation={2}>` | |
| `<div class="flight-card-body">` | `<CardContent>` | |
| Airline logo circle | `<Avatar variant="rounded">` | initials or logo image |
| Airline name | `<Typography variant="body2" fontWeight={600}>` | |
| Travel class badge | `<Typography variant="caption" color="text.secondary">` | or `<Chip size="small">` |
| Flight time (`14.50`) | `<Typography variant="h6" fontWeight={700}>` | |
| Airport/date text | `<Typography variant="caption" color="text.secondary">` | |
| Duration bar | `<Divider>` with custom `sx` + `<FlightIcon>` centered | |
| Price (`$18,500`) | `<Typography variant="h5" fontWeight={700}>` | |
| Book Now button | `<Button variant="contained" fullWidth>` | `sx={{ bgcolor: '#5d36af' }}` |
| `<div class="flight-card-footer">` | `<CardActions sx={{ justifyContent: 'space-between' }}>` | |
| "100 seats remaining" | `<Typography variant="caption" color="text.secondary">` | |
| Refund status | `<Chip size="small" label="..." color="warning/error/success">` | `warning`=partial, `error`=non, `success`=full |
| "View flight details" | `<Link component="button" variant="caption">` | |

```jsx
import { Card, CardContent, CardActions, Avatar, Typography,
         Button, Chip, Link, Box, Divider } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';

<Card elevation={2}>
  <CardContent>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar variant="rounded" sx={{ width: 32, height: 32 }}>A</Avatar>
        <Typography variant="body2" fontWeight={600}>ABC Airline</Typography>
      </Box>
      <Typography variant="caption" color="text.secondary">Travel Class: Economy</Typography>
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {/* Departure */}
      <Box>
        <Typography variant="h6" fontWeight={700}>14.50</Typography>
        <Typography variant="caption" color="text.secondary">Sun, 29 Jan 2023</Typography>
      </Box>

      {/* Duration */}
      <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Divider><FlightIcon fontSize="small" sx={{ color: 'text.disabled' }} /></Divider>
        <Typography variant="caption" color="text.secondary">9hr 50min</Typography>
      </Box>

      {/* Arrival */}
      <Box>
        <Typography variant="h6" fontWeight={700}>14.50</Typography>
        <Typography variant="caption" color="text.secondary">JFK Terminal, Nairobi</Typography>
      </Box>

      {/* Price + CTA */}
      <Box sx={{ textAlign: 'right', minWidth: 130 }}>
        <Typography variant="h5" fontWeight={700} mb={1}>$18,500</Typography>
        <Button variant="contained" fullWidth sx={{ bgcolor: '#5d36af' }}>Book Now</Button>
      </Box>
    </Box>
  </CardContent>

  <CardActions sx={{ justifyContent: 'space-between', px: 2.5 }}>
    <Typography variant="caption" color="text.secondary">100 seats remaining</Typography>
    <Chip label="Partially Refundable" color="warning" size="small" />
    <Link component="button" variant="caption" color="primary">View flight details</Link>
  </CardActions>
</Card>
```

---

## 6. Expanded Flight Detail Tabs

| HTML Element | MUI Component | Props / Notes |
|---|---|---|
| `<div class="flight-detail-tabs">` | `<Tabs>` | `variant="scrollable"` for overflow |
| `<div class="detail-tab">` | `<Tab label="...">` | |
| Tab panel content | `<TabPanel>` (custom) or conditional render | |
| Amenity icons (WiFi, Video…) | `<Tooltip title="WiFi"><WifiIcon /></Tooltip>` | from `@mui/icons-material` |
| Layover notice | `<Alert severity="info" variant="outlined">` | or just `<Typography>` |

---

## 7. Ad Sidebar Cards

| HTML Element | MUI Component | Props / Notes |
|---|---|---|
| `<div class="ad-card">` | `<Card elevation={2}>` | |
| `<div class="ad-card-img">` | `<CardMedia component="img" height="160">` | |
| `<div class="ad-card-body">` | `<CardContent>` | |
| Title | `<Typography variant="subtitle2" fontWeight={700}>` | |
| Description | `<Typography variant="body2" color="text.secondary">` | |
| Action button | `<Button variant="outlined" fullWidth>` | `color="secondary"` or custom `sx` |

```jsx
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

<Card elevation={2}>
  <CardMedia component="img" height="160" image="..." alt="..." />
  <CardContent>
    <Typography variant="subtitle2" fontWeight={700} gutterBottom>
      International Guideline
    </Typography>
    <Typography variant="body2" color="text.secondary">
      COVID safety measures adopted by various countries...
    </Typography>
  </CardContent>
  <CardActions sx={{ px: 2, pb: 2 }}>
    <Button variant="outlined" fullWidth>View guidelines</Button>
  </CardActions>
</Card>
```

---

## 8. Footer

| HTML Element | MUI Component | Props / Notes |
|---|---|---|
| `<footer>` wrapper | `<Box component="footer" sx={{ bgcolor: '#3d2477', color: '#fff', ... }}>` | |
| Social icons | `<IconButton color="inherit">` + MUI icons (`TwitterIcon`, `InstagramIcon`, `FacebookIcon`) | from `@mui/icons-material` |
| Logo text | `<Typography variant="h6" fontWeight={700}>` | |
| Copyright | `<Typography variant="caption" color="rgba(255,255,255,0.7)">` | |

```jsx
import { Box, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

<Box component="footer" sx={{ bgcolor: '#3d2477', color: '#fff', px: 15, py: 3,
  display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
    <Box>
      <IconButton color="inherit" size="small"><TwitterIcon /></IconButton>
      <IconButton color="inherit" size="small"><InstagramIcon /></IconButton>
      <IconButton color="inherit" size="small"><FacebookIcon /></IconButton>
    </Box>
    <Typography variant="h6" fontWeight={700}>GlobGoer</Typography>
  </Box>
  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
    © 2023 GlobGoer Inc.
  </Typography>
</Box>
```

---

## Quick Install

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
# For DateRangePicker:
npm install @mui/x-date-pickers-pro dayjs
```

---

## Component Summary Table

| Section | HTML class | MUI Component(s) |
|---|---|---|
| Navbar | `.navbar` | `AppBar`, `Toolbar`, `Button`, `Typography` |
| Trip pills | `.pill` | `ToggleButtonGroup`, `ToggleButton` / `Chip` |
| Search inputs | `.input-group input` | `TextField` + `InputAdornment` |
| Swap button | `.swap-btn` | `IconButton` + `SwapHorizIcon` |
| Date range | `input[placeholder="Departing..."]` | `DateRangePicker` (MUI X) |
| Search CTA | `.search-btn` | `Button` + `SearchIcon` |
| Filter sidebar | `.filter-sidebar` | `Paper`, `FormGroup`, `FormControlLabel`, `Checkbox` |
| Price range slider | `input[type=range]` | `Slider` |
| Divider | `<hr class="divider">` | `Divider` |
| Filter buttons | `.btn-reset` / `.btn-apply` | `Button` (outlined / contained) |
| Sort tabs | `.sorting-row` / `.sort-tab` | `Tabs`, `Tab` |
| Flight card | `.flight-card` | `Card`, `CardContent`, `CardActions` |
| Airline logo | `.airline-logo` | `Avatar` |
| Refund chip | `.refund-status` | `Chip` (color: warning/error/success) |
| Detail link | `.view-details` | `Link` |
| Detail tabs | `.flight-detail-tabs` | `Tabs`, `Tab` |
| Ad card | `.ad-card` | `Card`, `CardMedia`, `CardContent`, `CardActions` |
| Footer | `.footer` | `Box`, `IconButton`, `Typography` |
