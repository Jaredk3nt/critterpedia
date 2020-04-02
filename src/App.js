import React, { useMemo, useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
// Base Components
import Box from './components/Box';
// Components
import FilterBar from './components/FilterBar';
import CritterGrid from './components/CritterGrid';
// Data
import crittersData from './critters.json';
import {
  HEMISPHERES,
  ACTIVE_LEVELS,
  parseSeason,
  parseTime,
} from './utils/season';
// Intitial setup on critters
const list = [
  ...crittersData.bugs.map(bug => ({
    ...bug,
    time: parseTime(bug.time),
    season: {
      northern: parseSeason(bug.season.northern),
      southern: parseSeason(bug.season.southern),
    },
    type: 'bug',
  })),
  ...crittersData.fish.map(fish => ({
    ...fish,
    time: parseTime(fish.time),
    season: {
      northern: parseSeason(fish.season.northern),
      southern: parseSeason(fish.season.southern),
    },
    type: 'fish',
  })),
];
const currentMonth = new Date().getMonth();

const engine = new Fuse(list, {
  distance: 100,
  minMatchCharLength: 2,
  threshold: 0.5,
  keys: ['name'],
});

function critterFilter({ showBugs, showFish, active, hemisphere }) {
  return critter => {
    return (
      ((critter.type === 'fish' && showFish) ||
        (critter.type === 'bug' && showBugs)) &&
      ((active === ACTIVE_LEVELS[0] &&
        critter.season[hemisphere].includes(currentMonth)) ||
        active === ACTIVE_LEVELS[1])
    );
  };
}

function App() {
  // Ref for debouncing search results
  const typing = useRef(null);
  // Setup search engine
  const [showBugs, setShowBugs] = useState(true);
  const [showFish, setShowFish] = useState(true);
  // Setup state
  const [search, setSearch] = useState('');
  const [visibleActivity, setVisibleActivity] = useState(ACTIVE_LEVELS[0]);
  // TODO: add sethemisphere to change seasons
  const [hemisphere] = useState(HEMISPHERES[0]);
  const [critters, setCritters] = useState(
    list.filter(
      critterFilter({
        showBugs,
        showFish,
        hemisphere,
        active: visibleActivity,
      })
    )
  );

  useEffect(() => {
    // Handle debouncing the actual search call
    function debouncedSearch() {
      clearTimeout(typing.current);
      typing.current = setTimeout(() => {
        typing.current = null;
        if (search && search.length) {
          const result = engine.search(search);
          setCritters(
            result
              .map(item => item.item)
              .filter(
                critterFilter({
                  showBugs,
                  showFish,
                  hemisphere,
                  active: visibleActivity,
                })
              )
          );
        } else {
          setCritters(
            list.filter(
              critterFilter({
                showBugs,
                showFish,
                hemisphere,
                active: visibleActivity,
              })
            )
          );
        }
      }, 250);
    }

    debouncedSearch();
  }, [search, showBugs, showFish, visibleActivity]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const critterGrid = useMemo(
    () => (
      <CritterGrid
        critters={critters}
        currentMonth={currentMonth}
        hemisphere={hemisphere}
      />
    ),
    [critters, hemisphere]
  );

  return (
    <Box display="flex" flexDirection="column">
      <FilterBar
        searchString={search}
        onSearchChange={handleSearch}
        showBugs={showBugs}
        showFish={showFish}
        visibleActivity={visibleActivity}
        onVisibleActivityChange={e => setVisibleActivity(e.target.value)}
        onClickBugs={() => setShowBugs(prev => !prev)}
        onClickFish={() => setShowFish(prev => !prev)}
      />
      <Box padding={['1em', '2em']}>{critterGrid}</Box>
    </Box>
  );
}

export default App;
