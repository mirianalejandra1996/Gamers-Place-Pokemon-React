// import React from "react";
import React from "react";
import { usePokedex } from "../../Services/Contexts/PokeContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import ScrollButton from "../ScrollButton/ScrollButton";
import Title from "../Title/Title";
import "./PokemonList.scss";

export default function PokemonList() {
  const { pokemons } = usePokedex();

  return (
    <main className="main-container">
      <div className="gallery-container"></div>
      <div className="pokemons-container">
        <div className="pokemons-container__title">
          <Title text="Pokémon List" />
        </div>
        <div className="cards-container-pokedex">
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
