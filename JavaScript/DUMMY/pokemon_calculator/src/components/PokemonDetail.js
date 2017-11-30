export const PokemonDetail = ({pokemon}) => {
    return(
      <div className="details">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
      </div>
    )
};