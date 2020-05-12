import React from 'react';
import './App.css';

import logo from './assets/logo3.png'

import Routes from './routes'

function App() {
  return (
    <div className="container">
      <a href="/">
        <img src={logo} alt="AirCnC" className="logo" />
      </a>
      <h1>Minhas Receitas</h1>
      <div className="content">
        <Routes />
      </div>
    </div>
  );
}

export default App;
