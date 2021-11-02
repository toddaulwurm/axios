import './App.css';
import React,{useState, useEffect} from 'react';
import axios from "axios";

function App() {
  const [pokedex, setPokedex] = useState([])
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=891')
        .then(response => {setPokedex(response.data.results)})
    }, []);
    // fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=891')
    //   .then(response => {return response.json()})
    //   .then(response => {setPokedex(response.results)})
    //   .catch(err=>{console.log(err);})
    // }, []);

  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <input type="button" value="Fetch Pokemon" onClick={() => setVisible(true)}/>
      {/* Button above needed to insert below text */}
      {pokedex.length > 0? visible?pokedex.map((pokemon, index)=>{
          return (<h4 key={index}>{pokemon.name}</h4>)
      }):"":null}
    </div>
  );
}

export default App;
