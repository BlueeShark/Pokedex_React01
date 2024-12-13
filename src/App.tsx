import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";

const [pokemonIndex, setPokemonIndex] = useState(0)

function Article({ name }) {
  return (
    <button type= "button" onClick={}>
      {name}
    </button>
  );
}

function App() {

  return (
    <div>
      <PokemonCard {...pokemonList[pokemonIndex]} />
      <ul>
        {pokemonList
          .map((article) => (
            <Article
              key={article.name} 
              name={article.name}
            />
          ))}
      </ul>
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
