import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function Nayok(){
  const NayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
    <div style={NayokStyle}>
      <h1> Ami khol nayok noi</h1>
      <h3> I Have Done 5 movies</h3>
    </div>
  )
}

export default App;
