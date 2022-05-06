import React, { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import ScrollButton from "../ScrollButton/ScrollButton";
import Title from "../Title/Title";
import "./PokemonList.scss";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllPokemons = async () => {
    // TODO: Create a loader
    setLoading(true);

    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
      // "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    const data = await response.json();

    data.results.forEach(async (pokemon) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const dataPokemon = await response.json();

      setPokemons((currentList) => [...currentList, dataPokemon]);
    });
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <main className="main-container">
      <div className="gallery-container"></div>
      <div className="pokemons-container">
        <div className="pokemons-container__title">
          <Title text="Pokémon List" />
        </div>
        <div className="cards-container-pokedex">
          {/* {pokemons.map((pokemon, index) => ( */}
          {pokemons
            .sort((a, b) => a.id - b.id)
            .map((pokemon, index) => (
              <PokemonCard pokemon={pokemon} key={`type-${index}`} />
            ))}
        </div>

        {/* Floating button*/}
        <ScrollButton />
      </div>
    </main>
  );
}
