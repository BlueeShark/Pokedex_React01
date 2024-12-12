import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";


function App() {

  const [pokemon, pokemonIndex] = useState(0)

  const NextPoke = () => {
    pokemonIndex(pokemon + 1)
  };
  const PrevPoke = () => {
    pokemonIndex(pokemon - 1)
  };

  return (
    <div>
      <PokemonCard name={pokemonList[pokemon].name} imgSrc={pokemonList[pokemon].imgSrc} />
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
    name: "mew",
  },
];

export default App;
