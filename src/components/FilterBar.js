import React from 'react';
// Base Components
import Box from './Box';
import Text from './Text';
import Image from './Image';
import Input from './Input';
import Spacer from './Spacer';
// Media
import bugActive from '../media/bug-active.png';
import fishActive from '../media/fish-active.png';
import bugInactive from '../media/bug-inactive.png';
import fishInactive from '../media/fish-inactive.png';

export default function FilterBar({
  showFish,
  showBugs,
  onClickBugs,
  onClickFish,
  searchString,
  onSearchChange,
}) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Input
        value={searchString}
        onChange={onSearchChange}
        placeholder="Search for Critters"
        backgroundColor="#f6f5e1"
        paddingBottom="0px"
        borderRadius=".125rem"
      />
      <Spacer width=".25rem" />
      <Box display="flex">
        <FilterButton
          img={showBugs ? bugActive : bugInactive}
          alt="showBugs"
          onClick={onClickBugs}
        />
        <Spacer width=".25rem" />
        <FilterButton
          img={showFish ? fishActive : fishInactive}
          alt="showFish"
          onClick={onClickFish}
        />
      </Box>
    </Box>
  );
}

export function FilterButton({ img, alt, onClick }) {
  return (
    <Box
      onClick={onClick}
      backgroundColor="#f6f5e1"
      borderRadius="50%"
      height="3rem"
      width="3rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Image src={img} alt={alt} height="32px" />
    </Box>
  );
}
