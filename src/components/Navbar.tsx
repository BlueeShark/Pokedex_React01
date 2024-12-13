interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

  
  function Navbar( { setPokemonIndex, pokemonList }: NavBarProps) {
    const handlePokemonClick = (pokemon, index) => {
      setPokemonIndex(index);
      if (pokemon.name === "pikachu") {
        setTimeout(() => {
          alert("pika pikachu !!!");
        }, 100);
        }
    }
    return (
        <nav>
        {pokemonList.map((pokemon, index) => (
            <button type= "button" onClick={() => handlePokemonClick(pokemon, index)} key={pokemon.name} name={pokemon.name} >
            {pokemon.name}
            </button>
          ))}
      </nav>
    )
}

export default Navbar;