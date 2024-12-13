import { useState } from "react";
import "./App.css";

import PokemonCard from "./components/PokemonCard";

function Article({ name, setIndex }) {
  return (
    <button type= "button" onClick={setIndex}>
      {name}
    </button>
  );
}

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)

  return (
    <div>
      <PokemonCard {...pokemonList[pokemonIndex]} />
      <ul>
        {pokemonList
          .map((article, index) => (
            <Article
              setIndex={() => setPokemonIndex(index)}
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
