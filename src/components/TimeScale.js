import React from 'react';
// Base Components
import Box from './Box';
import Grid from './Grid';
import Spacer from './Spacer';
import Text from './Text';
// Data
const TIME = [...Array(24).keys()];
const VIEW_TIMES = {
  0: '12 am',
  6: '6',
  12: '12pm',
  18: '6',
};

export default function TimeScale({ hours }) {
  const parsedHours = hours;
  return (
    <Box>
      <Box position="relative">
        {TIME.map(t => {
          const mod3 = t % 3 === 0;
          const mod6 = t % 6 === 0;
          return (
            <GuideLine
              location={`${(t / 24) * 100}%`}
              short={mod3 && !mod6}
              partial={!mod3 && !mod6}
            >
              {mod6 ? VIEW_TIMES[t] : ''}
            </GuideLine>
          );
        })}
        <GuideLine location="100%"></GuideLine>
        <Grid
          width="100%"
          gridTemplateColumns="repeat(24, 1fr)"
          borderBottom="2px solid #e3d9a8"
          paddingBottom="1px"
          paddingTop="8px"
        >
          {TIME.map((_, idx) => {
            const isActive = parsedHours.includes(idx);
            const isStart =
              !parsedHours.includes(idx === 0 ? 23 : idx - 1) ||
              (idx === 0 && parsedHours.length === 24);
            const isEnd =
              !parsedHours.includes(idx === 23 ? 0 : idx + 1) ||
              (idx === 23 && parsedHours.length === 24);
            let borderRadius = '0px';
            if (isStart) borderRadius = '50% 0px 0px 50%';
            if (isEnd) borderRadius = '0px 50% 50% 0px';
            return (
              <Box
                key={`hour-${idx}`}
                height="14px"
                backgroundColor={isActive ? '#c3ba00' : 'transparent'}
                borderRadius={borderRadius}
              ></Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

function GuideLine({ short, partial, location, children }) {
  let height = '30px';
  if (short) {
    height = '22px';
  }
  if (partial) {
    height = '12px';
  }

  return (
    <Spacer
      position="absolute"
      left={location}
      bottom={partial ? '4px' : '0px'}
      height={height}
      paddingLeft="2px"
      borderLeft={
        partial || short ? '1px solid #e3d9a8' : '1.5px solid #e3d9a8'
      }
      boxSizing="border-box"
    >
      <Text fontSize=".5rem">{children}</Text>
    </Spacer>
  );
}
