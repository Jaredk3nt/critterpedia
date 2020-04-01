import React from 'react';
// Base Components
import Box from './Box';
import Text from './Text';
import Image from './Image';
import Spacer from './Spacer';
// Components
import MonthGrid from './MonthGrid';
import TimeScale from './TimeScale';
// Media
import bugInactive from '../media/bug-inactive.png';
import fishInactive from '../media/fish-inactive.png';
// Utils
import { parseSeason } from '../utils/season';

export default function CritterCard({ critter, currentMonth, hemisphere }) {
  const season = parseSeason(critter.season[hemisphere]);
  const hours = critter.time;
  const active = season ? season.includes(currentMonth) : false;

  return (
    <Box
      border="1px solid #e3d9a8"
      padding="1em"
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" alignItems="center">
        <Image
          src={critter.type === 'bug' ? bugInactive : fishInactive}
          alt={critter.type}
          height="24px"
        />
        <Spacer width=".25rem" />
        <Text>{critter.name}</Text>
      </Box>
      <Spacer height=".5em" />
      <Box display="flex" flexDirection="column">
        <InfoLine title="Value" value={critter.value + ' bells'} />
        <Spacer height=".25em" />
        <InfoLine title="Location" value={critter.location} />
        <Spacer height=".25em" />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
        >
          <Box display="inline">
            <InfoTitle>Active Hours</InfoTitle>
          </Box>
          <Spacer height=".85em" />
          <Box width="100%">
            <TimeScale hours={hours} />
          </Box>
        </Box>
        <Spacer height=".25em" />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
        >
          <Box display="inline">
            <InfoTitle>Season</InfoTitle>
          </Box>
          <Spacer height=".25em" />
          <Box width="100%">
            <MonthGrid currentMonth={currentMonth} activeMonths={season} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export function InfoLine({ title, value }) {
  return (
    <Box display="flex">
      <Box>
        <InfoTitle>{title}</InfoTitle>
      </Box>
      <Spacer width=".25rem" />
      <Text fontSize=".9rem" lineHeight="1.2">
        {value}
      </Text>
    </Box>
  );
}

export function InfoTitle({ children, ...props }) {
  return (
    <Text
      fontSize=".9rem"
      color="#444905"
      backgroundColor="#d6d287"
      borderRadius=".125rem"
      padding="0em .1rem"
      lineHeight="1.2"
      width="auto"
      {...props}
    >
      {children}
    </Text>
  );
}
