import React from 'react';
// Base Components
import Box from './Box';
import Grid from './Grid';
import Spacer from './Spacer';
import Text from './Text';
// Utils
import { parseTime } from '../utils/season';
// Data
const TIME = [...Array(24).keys()];

export default function TimeScale({ hours }) {
  const parsedHours = parseTime(hours);
  return (
    <Box position="relative">
      <GuideLine location="0px">12 am</GuideLine>
      <GuideLine location="12.5%" short></GuideLine>
      <GuideLine location="25%">6</GuideLine>
      <GuideLine location="37.5%" short></GuideLine>
      <GuideLine location="50%">12 pm</GuideLine>
      <GuideLine location="62.5%" short></GuideLine>
      <GuideLine location="75%">6</GuideLine>
      <GuideLine location="87.5%" short></GuideLine>
      <GuideLine location="100%"></GuideLine>
      <Grid
        width="100%"
        gridTemplateColumns="repeat(24, 1fr)"
        borderBottom="2px solid #e3d9a8"
      >
        {TIME.map((_, idx) => {
          const isActive = parsedHours.includes(idx);
          return (
            <Box
              key={`hour-${idx}`}
              height="18px"
              backgroundColor={isActive ? '#c3ba00' : 'transparent'}
            ></Box>
          );
        })}
      </Grid>
    </Box>
  );
}

function GuideLine({ short, location, children }) {
  return (
    <Spacer
      position="absolute"
      left={location}
      bottom="0px"
      height={short ? '22px' : '30px'}
      paddingLeft="2px"
      borderLeft="2px solid #e3d9a8"
      boxSizing="border-box"
    >
      <Text fontSize=".45rem" color="#514d32">
        {children}
      </Text>
    </Spacer>
  );
}
