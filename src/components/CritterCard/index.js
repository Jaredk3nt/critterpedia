import React, { useMemo } from 'react';
// Components
import TimeScale from '../TimeScale';
import MonthGrid from '../MonthGrid';
// Media
import bugImg from '../../media/bug-inactive.png';
import fishImg from '../../media/fish-inactive.png';
// Styles
import './critterCard.css';
// Vars
const img = {
  bug: bugImg,
  fish: fishImg,
};

export default function CritterCard({ critter, hemisphere, month }) {
  // Memoize timescale since it shouldn't change very often
  // And it has a heavy render cost
  const critterTime = useMemo(() => {
    return <TimeScale time={critter.time} />;
  }, [critter.time]);
  const critterSeason = useMemo(() => {
    return <MonthGrid season={critter.season[hemisphere]} month={month} />;
  }, [critter.season, hemisphere, month]);

  return (
    <div className="crittercard">
      <div className="crittercard__header">
        <img src={img[critter.type]} />
        <h3>{critter.name}</h3>
      </div>
      <Line title="Value">
        <p>{critter.value} bells</p>
      </Line>
      <Line title="Location">
        <p>{critter.location}</p>
      </Line>
      <LineGroup title="Active Hours">{critterTime}</LineGroup>
      <LineGroup title="Season">{critterSeason}</LineGroup>
    </div>
  );
}

function LineGroup({ title, children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '.25rem',
      }}
    >
      <div style={{ display: 'inline' }}>
        <LineTitle>{title}</LineTitle>
      </div>
      <span style={{ height: '.5rem' }} />
      {children}
    </div>
  );
}

function Line({ title, children }) {
  return (
    <div className="crittercard__line">
      <LineTitle>{title}</LineTitle>
      <span style={{ width: '.25rem' }} />
      {children}
    </div>
  );
}

function LineTitle({ children }) {
  return <p className="crittercard__line--title">{children}</p>;
}
