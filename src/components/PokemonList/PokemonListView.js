import React from 'react';

function PokemonListView({pokemons}) {
  return (
    <div>
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ul>
    </div>
  );
}

export default PokemonListView;