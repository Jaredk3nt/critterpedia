import React, { useState } from 'react';
import classnames from 'classnames';
// Styles
import './infoBar.css';

// TODO: animate
export default function InfoBar({ children }) {
  const [visible, setVisible] = useState(true);

  return (
    <div className={classnames('infobar', { visible })}>
      <div className="infobar__content">{children}</div>
      <button className="infobar__close" onClick={() => setVisible(false)}>
        x
      </button>
    </div>
  );
}
