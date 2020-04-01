import React from 'react';
// Base Components
import Grid from './Grid';
// Components
import CritterCard from './CritterCard';

export default function CritterGrid({ critters, currentMonth, hemisphere }) {
  return (
    <Grid
      gridTemplateColumns="repeat(auto-fit, minmax(260px, 1fr))"
      border="1px solid #e3d9a8"
    >
      {critters.map(critter => (
        <CritterCard
          key={critter.name}
          critter={critter}
          currentMonth={currentMonth}
          hemisphere={hemisphere}
        />
      ))}
    </Grid>
  );
}
