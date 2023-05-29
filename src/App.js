import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['manna','depjol','alia']
  return (
    <div className="App">
      <MoviCounter></MoviCounter>
      <Nayok name={ nayoks[1]} age='56'></Nayok>
      <Nayok name='sakib'></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}
function MoviCounter(){
  const [count,setCount]= useState(0);
  const handleClick =()=>setCount(count+1);
  return(
    <div>
      <button onClick={handleClick}>Add Movi</button>
      <h5>Numbers of Movies:{count}</h5>
      <MoviesDisplay movies={count}></MoviesDisplay>
      <MoviesDisplay movies={count+10}></MoviesDisplay>
      <MoviesDisplay movies={count+5}></MoviesDisplay>
      <MoviesDisplay movies={count+30}></MoviesDisplay>
    </div>
  )
}

function MoviesDisplay(props){
  return <h4>Movies i have acted:{props.movies}</h4>
}
function Nayok(props){
  console.log(props.name);
  const NayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }
  return (
    <div style={NayokStyle}>
      <h1> Ami khol nayok -{props.name}</h1>
      <h3> I Have Done 5 movies in {props.age ||30}  years</h3>
    </div>
  )
}

export default App;
