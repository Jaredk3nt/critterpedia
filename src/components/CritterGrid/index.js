import React from 'react';
// Components
import CritterCard from '../CritterCard';
// Styles
import './critterGrid.css';

export default function CritterGrid({ critters, hemisphere }) {
  return (
    <ul className="crittergrid">
      {critters.map((critter) => (
        <li>
          <CritterCard critter={critter} hemisphere={hemisphere} />
        </li>
      ))}
    </ul>
  );
}
