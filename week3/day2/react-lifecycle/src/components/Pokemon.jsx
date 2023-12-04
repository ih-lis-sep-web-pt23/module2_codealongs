import { useState, useEffect } from "react";
import axios from "axios";

function Pokemon() {
  const [fetching, setFetching] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(response => {
      console.log(response.data);
      setPokemon(response.data);
    });
  }, []);

  return (
    <div>
      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <img
            src={pokemon.sprites.front_default}
            alt="pokemon"
          />
        </div>
      )}
    </div>
  );
}

export default Pokemon;
