import React, { useState, useContext, createContext, useEffect } from "react";

const Pokedex = createContext();

const PokeContext = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  // const [url, setUrl] = useState(
  //   "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  //   );
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  const getAllPokemons = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    data.results.forEach(async (pokemon) => {
      const responsePokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const dataPokemon = await responsePokemon.json();
      setPokemons((currentList) => [...currentList, dataPokemon]);
    });
    console.log(pokemons);
  };

  useEffect(() => {
    getAllPokemons(url);
  }, [url]);

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
