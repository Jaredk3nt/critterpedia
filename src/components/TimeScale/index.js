import React from 'react';
import classnames from 'classnames';
// Styles
import './timeScale.css';
import './guideline.css';
// Data
const TIME = [...Array(24).keys()];
const VIEW_TIMES = {
  0: '12 am',
  6: '6',
  12: '12pm',
  18: '6',
};

export default function TimeScale({ time }) {
  return (
    <div style={{ width: '100%' }}>
      {/* Guidelines */}
      <div className="guideline-container">
        {TIME.map((t) => {
          const mod3 = t % 3 === 0;
          const mod6 = t % 6 === 0;
          return (
            <GuideLine
              location={`${(t / 24) * 100}%`}
              short={mod3 && !mod6}
              partial={!mod3 && !mod6}
            >
              {mod6 ? VIEW_TIMES[t] : ''}
            </GuideLine>
          );
        })}
        <GuideLine location="100%"></GuideLine>
        {/* Time blocks */}
        <div className="timescale-grid">
          {TIME.map((_, idx) => (
            <div
              className={classnames('timescale-block', {
                active: time.includes(idx),
                start:
                  !time.includes(idx === 0 ? 23 : idx - 1) ||
                  (idx === 0 && time.length === 24),
                end:
                  !time.includes(idx === 23 ? 0 : idx + 1) ||
                  (idx === 23 && time.length === 24),
              })}
              key={`hour-${idx}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GuideLine({ location, short, partial, children }) {
  return (
    <span
      className={`guideline ${short ? 'short' : ''} ${
        partial ? 'partial' : ''
      }`}
      style={{ left: location }}
    >
      <p className="guideline-text">{children}</p>
    </span>
  );
}
