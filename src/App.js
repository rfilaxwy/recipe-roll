import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import RollContainer from './Components/RollContainer/RollContainer';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <NavBar title='Recipe Roulette' />
      <RollContainer />
    </div>
  );
}

export default App;
