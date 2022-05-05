import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import Title from "../Title/Title";
import "./PokemonList.scss";

export default function PokemonList() {
  return (
    <main className="main-container">
      <div className="gallery-container"></div>
      <div className="pokemons-container">
        <div className="pokemons-container__title">
          <Title text="Pokémon List" />
        </div>
        {/* <h1>Pokemon List</h1> */}
        <div className="cards-container">
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>
      </div>
    </main>
  );
}
