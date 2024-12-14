import "./PokemonCard.css"

interface PokemonCardProps {
  pokemon : {
    name: string;
    color: string;
    imgSrc?: string;
  }
}

function PokemonCard({ pokemon } : PokemonCardProps) {

  return (
    <figure className="pokemonCard" style={{['--item-color' as string]: pokemon.color}}>

      {pokemon.imgSrc ? 
      <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p>}
      
      <figcaption>{pokemon.name}</figcaption>

    </figure>
  );
}

export default PokemonCard;

