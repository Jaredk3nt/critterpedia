import React, { useMemo, useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
// Base Components
import Box from './components/Box';
// Components
import FilterBar from './components/FilterBar';
import CritterGrid from './components/CritterGrid';
// Data
import crittersData from './critters.json';
const list = [
  ...crittersData.bugs.map(bug => ({ ...bug, type: 'bug' })),
  ...crittersData.fish.map(fish => ({ ...fish, type: 'fish' })),
];
const currentMonth = new Date().getMonth();
const HEMISPHERES = ['northern', 'southern'];
const engine = new Fuse(list, {
  distance: 100,
  minMatchCharLength: 2,
  threshold: 0.5,
  keys: ['name'],
});

function App() {
  // Ref for debouncing search results
  const typing = useRef(null);
  // Setup search engine
  const [showBugs, setShowBugs] = useState(true);
  const [showFish, setShowFish] = useState(true);
  // Setup state
  const [search, setSearch] = useState('');
  const [critters, setCritters] = useState(list);
  const [hemisphere, setHemisphere] = useState(HEMISPHERES[0]);

  useEffect(() => {
    // Handle debouncing the actual search call
    function debouncedSearch() {
      console.log('search');
      clearTimeout(typing.current);
      typing.current = setTimeout(() => {
        typing.current = null;
        if (search && search.length) {
          const result = engine.search(search);
          setCritters(
            result
              .map(item => item.item)
              .filter(critter => {
                console.log({ type: critter.type, showFish, showBugs})
                if (critter.type === 'fish' && !showFish) {
                  return false;
                }
                if (critter.type === 'bug' && !showBugs) {
                  return false;
                }
                return true;
              })
          );
        } else {
          setCritters(list);
        }
      }, 250);
    }

    debouncedSearch();
  }, [search, engine, showBugs, showFish]);

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
    [critters, currentMonth, hemisphere]
  );

  return (
    <Box display="flex" flexDirection="column">
      <FilterBar
        searchString={search}
        onSearchChange={handleSearch}
        showBugs={showBugs}
        showFish={showFish}
        onClickBugs={() => setShowBugs(prev => !prev)}
        onClickFish={() => setShowFish(prev => !prev)}
      />
      <Box padding="2em">{critterGrid}</Box>
    </Box>
  );
}

export default App;
