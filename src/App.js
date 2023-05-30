import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nayoks ,setNayoks]=useState([]);
useEffect(()=>{
fetch ('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>setNayoks(data))
},[])


  //const nayoks=[{name:'manna',age:55},{name:'dipjol',age:60},{name:'alia',age:27}]
  return (
    <div className="App">
      <MoviCounter></MoviCounter>
      {
        nayoks.map(nayok=> <Nayok name={nayok.name} age={nayok.age}> </Nayok>)
      }
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
