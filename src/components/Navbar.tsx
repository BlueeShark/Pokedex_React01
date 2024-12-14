import "./NavBar.css";

interface Pokemon {
    name: string;
    imgSrc?: string;
    color: string;
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
        <nav className="pokemonButton">
        {pokemonList.map((pokemon, index) => (
            <button style={{['--item-color' as string]: pokemon.color}} type= "button" onClick={() => handlePokemonClick(pokemon, index)} key={pokemon.name} name={pokemon.name} >
            {pokemon.name}
            </button>
          ))}
      </nav>
    )
}

export default Navbar;