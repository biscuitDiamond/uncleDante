import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Header } from '../components/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
    </div>
  );
}

export default App;
