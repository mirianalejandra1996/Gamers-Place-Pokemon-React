import React, { useState, useContext, createContext, useEffect } from "react";

const Pokedex = createContext();

const PokeContext = ({ children }) => {
  const [pokemons, setPokemons] = useState([]); //! INITIAL FETCH
  const [allPokemons, setAllPokemons] = useState([]); //! I WANT THIS
  const [types, setTypes] = useState([]);
  // const [url] = useState("https://pokeapi.co/api/v2/pokemon?limit=100");
  const [url] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );

  const getAllPokemons = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    data.results.forEach(async (pokemon) => {
      const responsePokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const dataPokemon = await responsePokemon.json();
      setAllPokemons((currentList) => [...currentList, dataPokemon]);
    });
  };

  useEffect(() => {
    getAllPokemons(url);
  }, [url]);

  useEffect(() => {
    const pokemonsFiltered = allPokemons.filter((pokemon) => {
      let pokemonTypes = pokemon.types.map((typePoke) => {
        return typePoke.type.name;
      }); // Returns an array of types, example ["fire", "water"]

      if (types.length === 1) {
        return pokemonTypes.includes(types[0]);
      } else {
        return types.every((e) => pokemonTypes.includes(e));
      }
    });

    setPokemons(pokemonsFiltered);
  }, [allPokemons, types]);

  return (
    <Pokedex.Provider
      value={{
        pokemons,
        types,
        setTypes,
      }}
    >
      {children}
    </Pokedex.Provider>
  );
};

export default PokeContext;

export const usePokedex = () => useContext(Pokedex);
