import React, { Component } from 'react';

import Header from './components/header/header';
import Players from './components/players/players';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <Header />
        <Players />
      </div>
    );
  }
}



export const Child = () => {
  return (
    <p>Some text</p>
  )
};
