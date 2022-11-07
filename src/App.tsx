import React from 'react';
import Header from './components/header/header';
import './App.css';
import Systemrouting from './components/router';
import { Provider } from 'react-redux'
import { store } from './reduxStore/store';


function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <Systemrouting></Systemrouting>
      </div>
    </Provider>
  );
}

export default App;
