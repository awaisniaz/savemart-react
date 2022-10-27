import React from 'react';
import Header from './components/header/header';
import './App.css';
import Systemrouting from './components/router';


function App() {

  return (
    <div className="App">
      <Header></Header>
      <Systemrouting></Systemrouting>
    </div>
  );
}

export default App;
