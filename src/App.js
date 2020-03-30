import React, { useMemo, useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
// Base Components
import Box from './components/Box';
// Components
import FilterBar from './components/FilterBar';
import CritterGrid from './components/CritterGrid';
// Data
import crittersData from './critters.json';
const HEMISPHERES = ['northern', 'southern']

function App() {
  // Ref for debouncing search results
  const typing = useRef(null);
  // Setup search engine
  const [showBugs, setShowBugs] = useState(true);
  const [showFish, setShowFish] = useState(true);
  const list = useMemo(() => {
    const l = [];
    if (showBugs) {
      l.push(...crittersData.bugs.map(bug => ({ ...bug, type: 'bug' })));
    }
    if (showFish) {
      l.push(...crittersData.fish.map(fish => ({ ...fish, type: 'fish' })));
    }
    return l;
  }, [showBugs, showFish]);
  const engine = useMemo(() => {
    return new Fuse(list, {
      distance: 100,
      minMatchCharLength: 2,
      threshold: 0.5,
      keys: ['name'],
    });
  }, [list]);
  // Setup state
  const [search, setSearch] = useState('');
  const [critters, setCritters] = useState(list);
  const [hemisphere, setHemisphere] = useState(HEMISPHERES[0]);
  const currentMonth = useMemo(() => new Date().getMonth(), []);

  useEffect(() => {
    // Handle debouncing the actual search call
    function debouncedSearch() {
      clearTimeout(typing.current);
      typing.current = setTimeout(() => {
        typing.current = null;
        if (search && search.length) {
          const result = engine.search(search);
          setCritters(result.map(item => item.item));
        } else {
          setCritters(list);
        }
      }, 250);
    }

    debouncedSearch();
  }, [search, engine]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

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
        <Box padding="2em">
          <CritterGrid
            critters={critters}
            currentMonth={currentMonth}
            hemisphere={hemisphere}
          />
        </Box>
      </Box>
  );
}

export default App;
