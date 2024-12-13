import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import data from "./data/pokemonList.json";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";


function App() {

  useEffect(
    () =>  {
      alert("hello pokemon trainer :)")
    }, 
    []
 );

  const [pokemonIndex, setPokemonIndex] = useState(0)

  return (
    <div>
      <PokemonCard pokemon ={data.pokemonList[pokemonIndex]} />
      <Navbar setPokemonIndex={setPokemonIndex} pokemonList={data.pokemonList} />
    </div>
  );
}

export default App;
