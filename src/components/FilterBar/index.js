import React from 'react';
import classnames from 'classnames';
// Components
import CritterButton from '../CritterButton';
// Utils
import { SORTS } from '../../utils/sort';
import { FILTER_TYPES } from '../../utils/filter';
import { ACTIONS } from '../../containers/CritterContainer/state';
// Styles
import './filterBar.css';

export default function FilterBar({
  dispatch,
  search,
  filters,
  onSearchChange,
}) {
  return (
    <div className="filterbar-container">
      <div className="filterbar">
        <input
          className="filterbar-search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Critters"
        />
        <div className="filterbar-filters">
          <div className="filterbar-filters__types">
            <CritterButton
              type={FILTER_TYPES.bug}
              active={
                filters.critterType === FILTER_TYPES.bug ||
                filters.critterType === FILTER_TYPES.all
              }
              onClick={() =>
                dispatch({
                  type: ACTIONS.setCritterType,
                  critterType: FILTER_TYPES.bug,
                })
              }
            />
            <div className="spacer" />
            <CritterButton
              type={FILTER_TYPES.fish}
              active={
                filters.critterType === FILTER_TYPES.fish ||
                filters.critterType === FILTER_TYPES.all
              }
              onClick={() =>
                dispatch({
                  type: ACTIONS.setCritterType,
                  critterType: FILTER_TYPES.fish,
                })
              }
            />
            <div className="filterbar-filters__divider" />
          </div>
          <div className="filterbar-filters__select">
            <button
              className={classnames('filterbar__active-button', {
                active: filters.active,
              })}
              onClick={() => dispatch({ type: ACTIONS.toggleActive })}
            >
              {filters.active ? 'Active Only' : 'All Critters'}
            </button>
            <div className="select-filters__spacer" />
            <select
              className="filterbar-select"
              value={filters.hemisphere}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.setHemisphere,
                  hemisphere: e.target.value,
                })
              }
            >
              <option value="northern">Northern</option>
              <option value="southern">Southern</option>
            </select>
            <div className="spacer" />
            <select
              className="filterbar-select"
              value={filters.sortType}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.setSortType,
                  sortType: e.target.value,
                })
              }
            >
              {Object.values(SORTS).map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
