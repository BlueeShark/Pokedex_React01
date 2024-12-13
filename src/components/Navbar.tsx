interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

function Navbar( { setPokemonIndex, pokemonList }: NavBarProps) {
    return (
        <nav>
        {pokemonList.map((pokemon, index) => (
            <button type= "button" onClick={() => setPokemonIndex(index)} key={pokemon.name} name={pokemon.name} >
            {pokemon.name}
            </button>
          ))}
      </nav>
    )
}

export default Navbar;