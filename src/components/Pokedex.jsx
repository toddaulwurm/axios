import React, {useState, useEffect} from "react";
import axios from "axios";

const Pokedex = props => {
    const [pokedex, setPokedex] = useState([]);

    // const pokeBtn = e => {
    //     pokedex.length > 0 && pokedex.map((pokemon, index)=>{
    //         return (<h4 key={index}>{pokemon.name}</h4>)
    //     })
    // }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=891')
            .then(response => {setPokedex({pokemon: response.data.results})})
        }, []);
        // fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=891')
        //     .then(response => {return response.json()})
        //     .then(response => {setPokedex({pokemon: response.results})})
        //     .catch(err=>{console.log(err);})
        // }, []);

    return (
        <div>
            <h1>POKEDEX</h1>
            {/* <input type="button" value="Fetch Pokemon" onClick={pokeBtn}/> */}
            {/* Button above needed to insert below text */}
            {pokedex.length > 0? pokedex.map((pokemon, index)=>{
                return (<h4 key={index}>{pokemon.name}</h4>)
            }):null}
        </div>
    );
}
export default Pokedex;
