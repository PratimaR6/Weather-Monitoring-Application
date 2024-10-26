import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WeatherCard = ({ city, temperature, condition }) => {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {city}
        </Typography>
        <Typography variant="body2">
          Temperature: {temperature}°C
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Condition: {condition}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;