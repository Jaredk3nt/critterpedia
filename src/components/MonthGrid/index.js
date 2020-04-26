import React from 'react';
import classnames from 'classnames';
// Styles
import './monthGrid.css';
// Data
import { MONTHS } from '../../utils/filter';

export default function MonthGrid({ season, month }) {
  return (
    <div className="monthgrid">
      {MONTHS.map((m, idx) => {
        const isCurrent = idx === month;
        const isActive =
          season && Array.isArray(season) && season.includes(idx);
        return (
          <div
            key={m.name}
            className={classnames('monthgrid-month', {
              active: isActive,
              current: isCurrent,
            })}
          >
            <p>{m.shortName}</p>
          </div>
        );
      })}
    </div>
  );
}
