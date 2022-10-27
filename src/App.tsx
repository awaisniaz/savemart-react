import React from 'react';
import Header from './components/header/header';
import './App.css';

import Routing from './components/router.js'

function App() {

  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
