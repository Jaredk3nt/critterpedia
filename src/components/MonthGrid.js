import React from 'react';
// Base Components
import Box from './Box';
import Grid from './Grid';
import Text from './Text';
// Data
export const MONTHS = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'June',
  'July',
  'Aug.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.',
];

export default function MonthGrid({ currentMonth, activeMonths }) {
  return (
    <Grid gridTemplateColumns="repeat(4, 25%)" border="1px solid #e3d9a8">
      {MONTHS.map((month, idx) => {
        const isCurrent = idx === currentMonth;
        const isActive =
          activeMonths &&
          Array.isArray(activeMonths) &&
          activeMonths.includes(idx);
        return (
          <Box
            key={month}
            border={isCurrent ? '1px solid #c74720' : '1px solid #e3d9a8'}
            padding=".125rem"
          >
            <Text
              backgroundColor={isActive ? '#c3ba00' : 'transparent'}
              borderRadius=".125rem"
              padding=".125rem"
            >
              {month}
            </Text>
          </Box>
        );
      })}
    </Grid>
  );
}
