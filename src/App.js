import React from 'react';
// Components
import InfoBar from './components/InfoBar';
import CritterContainer from './containers/CritterContainer';
// Styles
import './styles.css';

function App() {
  return (
    <>
      <CritterContainer />
      <InfoBar>
        <p className="info-message">
          Give feeback, contribute, or support this project on{' '}
          <a href="https://github.com/Jaredk3nt/critterpedia">Github</a>
        </p>
      </InfoBar>
    </>
  );
}

export default App;
