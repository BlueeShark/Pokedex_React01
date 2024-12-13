interface PokemonCardProps {
  pokeCard : {
    name: string;
    imgSrc?: string;
  }
}

function PokemonCard({ pokeCard } : PokemonCardProps) {

  return (
    <figure>

      {pokeCard.imgSrc ? <img src={pokeCard.imgSrc} alt={pokeCard.name}/> : <p>???</p>}
      
      <figcaption>{pokeCard.name}</figcaption>

    </figure>
  );
}

export default PokemonCard;

