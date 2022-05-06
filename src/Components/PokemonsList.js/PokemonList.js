import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import ScrollButton from "../ScrollButton/ScrollButton";
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
        <div className="cards-container-pokedex">
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>

        {/* Floating button*/}
        <ScrollButton />
      </div>
    </main>
  );
}
