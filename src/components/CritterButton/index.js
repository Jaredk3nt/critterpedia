import React, { useMemo } from 'react';
// Media
import bugActive from '../../media/bug-active.png';
import fishActive from '../../media/fish-active.png';
import bugInactive from '../../media/bug-inactive.png';
import fishInactive from '../../media/fish-inactive.png';
// Styles
import './critterButton.css';

export default function CritterButton({ type, active, onClick }) {
  const alt = useMemo(() => {
    if (type === 'fish') {
      return active ? 'Fish Active' : 'Fish Inactive';
    } else {
      return active ? 'Bug Active' : 'Bug Inactive';
    }
  });
  const img = useMemo(() => {
    if (type === 'fish') {
      return active ? fishActive : fishInactive;
    } else {
      return active ? bugActive : bugInactive;
    }
  });

  return (
    <div
      className="critter-btn"
      onClick={onClick}
      role="button"
      backgroundColor="#f6f5e1"
      borderRadius="50%"
      height="3rem"
      width="3rem"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img src={img} alt={alt} className="critter-btn__img" />
    </div>
  );
}
