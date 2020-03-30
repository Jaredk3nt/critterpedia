import React from 'react';
// Base Components
import Box from './Box';
import Grid from './Grid';
// Data
const TIME = [...Array(24).keys()];

export default function TimeScale({ hours }) {
  return (
    <Grid
      width="100%"
      gridTemplateColumns="repeat(24, 1fr)"
      borderBottom="2px solid #e3d9a8"
    >
      {TIME.map((_, idx) => {
        const isActive =
          hours === true || (Array.isArray(hours) && hours.includes(idx));
        return (
          <Box
            height="18px"
            backgroundColor={isActive ? '#c3ba00' : 'transparent'}
          ></Box>
        );
      })}
    </Grid>
  );
}
