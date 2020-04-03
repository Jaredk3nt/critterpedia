import React from 'react';
// Base Components
import Box from './Box';
import Image from './Image';
import Input from './Input';
import Spacer from './Spacer';
import Select from './Select';
// Media
import bugActive from '../media/bug-active.png';
import fishActive from '../media/fish-active.png';
import bugInactive from '../media/bug-inactive.png';
import fishInactive from '../media/fish-inactive.png';
// Data
import { ACTIVE_LEVELS } from '../utils/season';
import { SORT_TYPES } from '../utils/filters';

export default function FilterBar({
  showFish,
  showBugs,
  onClickBugs,
  onClickFish,
  searchString,
  onSearchChange,
  sortType,
  onSortTypeChange,
  visibleActivity,
  onVisibleActivityChange,
}) {
  return (
    <Box display="flex" justifyContent='center' padding={['1em', '1em 2em 0em']}>
      <Box display="flex" flexDirection="column" width="100%">
        <Input
          value={searchString}
          onChange={onSearchChange}
          placeholder="Search for Critters"
          backgroundColor="#f6f5e1"
          paddingBottom="0px"
          borderRadius=".125rem"
          width={['100%', '500px']}
        />
        <Spacer height=".25rem" />
        <Box display="flex" alignItems="center">
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
          <Spacer width=".15rem" height="80%" backgroundColor="#f6f5e1" margin="0em .5em" />
          <Select value={visibleActivity} onChange={onVisibleActivityChange}>
            {ACTIVE_LEVELS.map(lv => (
              <option value={lv}>{lv}</option>
            ))}
          </Select>
          <Spacer width=".25rem" />
          <Select value={sortType} onChange={onSortTypeChange}>
            {SORT_TYPES.values().map(type => (
              <option value={type}>{type}</option>
            ))}
          </Select>
        </Box>
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
