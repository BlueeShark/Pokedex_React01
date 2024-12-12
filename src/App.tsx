import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";


function App() {

  const [pokemonIndex, pokemon] = useState(0)

  const PrevPoke = () => {
    pokemon(pokemonIndex > 0 ? pokemonIndex - 1 : 0 )
  };

  const NextPoke = () => {
    pokemon(pokemonIndex < pokemonList.length -1 ? pokemonIndex + 1 : pokemonIndex )
  };

  return (
    <div>
      <PokemonCard {...pokemonList[pokemonIndex]} />
      <button type="button" onClick={PrevPoke}>precedent</button>
      <button type="button" onClick={NextPoke}>Suivant</button>
    </div>

  );
}

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default App;
