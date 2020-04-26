import Fuse from 'fuse.js';
import { enums, string } from 'fun-enums';
// Utils
import { SORTS, sortCritters } from '../../utils/sort';
import { FILTER_TYPES, filterCritters } from '../../utils/filter';
// Data
import critterList from '../../data/critters.json';
// Defined vars
const currentMonth = new Date().getMonth();
const engine = new Fuse(critterList, {
  distance: 100,
  minMatchCharLength: 1,
  threshold: 0.5,
  keys: ['name'],
});

export const INITIAL_STATE = {
  critters: critterList,
  search: '',
  filters: {
    hemisphere: 'northern',
    critterType: FILTER_TYPES.all,
    sortType: SORTS.az,
    active: true,
  },
};

export const ACTIONS = enums(string)(
  'updateCritters',
  'filterCritters',
  'updateSearch',
  'setHemisphere',
  'setCritterType',
  'setSortType',
  'setActivity',
  'toggleActive'
);

const ACTION_MAP = {
  [ACTIONS.updateCritters]: (state, action) => {
    return { ...state, critters: action.critters };
  },
  [ACTIONS.filterCritters]: (state) => {
    let newList;
    // TODO: add filters
    if (state.search.length) {
      newList = filterCritters(
        engine.search(state.search).map((item) => item.item),
        state.filters
      );
    } else {
      newList = filterCritters(
        sortCritters(critterList, state.filters.sortType),
        state.filters
      );
    }
    return {
      ...state,
      critters: newList,
    };
  },
  [ACTIONS.updateSearch]: (state, action) => {
    return { ...state, search: action.search };
  },
  [ACTIONS.setHemisphere]: (state, action) => {
    return {
      ...state,
      filters: { ...state.filters, hemisphere: action.hemisphere },
    };
  },
  [ACTIONS.setCritterType]: (state, { critterType }) => {
    let newType;
    console.log({ old: state.filters.critterType, critterType });
    switch (state.filters.critterType) {
      case FILTER_TYPES.bug:
        if (critterType === FILTER_TYPES.bug) newType = FILTER_TYPES.none;
        if (critterType === FILTER_TYPES.fish) newType = FILTER_TYPES.all;
        break;
      case FILTER_TYPES.fish:
        if (critterType === FILTER_TYPES.bug) newType = FILTER_TYPES.all;
        if (critterType === FILTER_TYPES.fish) newType = FILTER_TYPES.none;
        break;
      case FILTER_TYPES.all:
        if (critterType === FILTER_TYPES.bug) newType = FILTER_TYPES.fish;
        if (critterType === FILTER_TYPES.fish) newType = FILTER_TYPES.bug;
        break;
      default:
        newType = critterType;
    }
    return {
      ...state,
      filters: { ...state.filters, critterType: newType },
    };
  },
  [ACTIONS.setSortType]: (state, action) => {
    return {
      ...state,
      critters: sortCritters(state.critters, action.sortType),
      filters: { ...state.filters, sortType: action.sortType },
    };
  },
  [ACTIONS.setActivity]: (state, action) => {
    return {
      ...state,
      filters: { ...state.filters, active: action.active },
    };
  },
  [ACTIONS.toggleActive]: (state) => {
    return {
      ...state,
      filters: { ...state.filters, active: !state.filters.active },
    };
  },
};

export function reducer(state, action) {
  console.debug({ state, action });
  const reducerFn = ACTION_MAP[action.type];
  if (!reducerFn) {
    throw {
      message: 'Unknown action in reducer.',
    };
  }
  return reducerFn(state, action);
}
