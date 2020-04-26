import React from 'react';
import classnames from 'classnames';
// Styles
import './monthGrid.css';
// Data
const currentMonth = new Date().getMonth();
export const months = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'June',
  'July',
  'Aug.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.',
];

export default function MonthGrid({ season }) {
  return (
    <div className="monthgrid">
      {months.map((month, idx) => {
        const isCurrent = idx === currentMonth;
        const isActive =
          season && Array.isArray(season) && season.includes(idx);
        return (
          <div
            key={month}
            className={classnames('monthgrid-month', {
              active: isActive,
              current: isCurrent,
            })}
          >
            <p>{month}</p>
          </div>
        );
      })}
    </div>
  );
}
