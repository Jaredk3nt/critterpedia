import React, { useRef, useEffect, useReducer } from 'react';
// State
import { reducer, INITIAL_STATE, ACTIONS } from './state';
// Components
import FilterBar from '../../components/FilterBar';
import CritterGrid from '../../components/CritterGrid';

export default function CritterContainer() {
  const typing = useRef(false);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: ACTIONS.filterCritters });
  }, [state.filters]);

  function type(search) {
    dispatch({ type: ACTIONS.updateSearch, search });
    clearTimeout(typing.current);
    typing.current = setTimeout(() => {
      typing.current = null;
      dispatch({ type: ACTIONS.filterCritters });
    }, 250);
  }

  return (
    <div>
      <FilterBar
        dispatch={dispatch}
        search={state.search}
        filters={state.filters}
        onSearchChange={type}
      />
      <CritterGrid critters={state.critters} hemisphere={state.filters.hemisphere} month={state.filters.month} />
    </div>
  );
}
