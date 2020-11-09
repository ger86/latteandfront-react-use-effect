import React, { useEffect, useState } from "react";
import PokemonListView from "./PokemonListView";

function PokemonList() {
  const [pokemons, setPokemons] = useState(null);
  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const json = await response.json();
        console.log(json);
        setPokemons(json.results);
      }
      fetchData();
    },
    [setPokemons]
  );

  if (!pokemons) {
    return <p>Cargando lista de Pokemons</p>;
  }

  return <PokemonListView pokemons={pokemons} />;
}

export default PokemonList;
