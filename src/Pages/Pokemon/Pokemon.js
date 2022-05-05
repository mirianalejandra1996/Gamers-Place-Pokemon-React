import React from "react";
import PokemonDetailCard from "../../Components/PokemonDetailCard/PokemonDetailCard";
import Title from "../../Components/Title/Title";
import "./Pokemon.scss";

export default function Pokemon() {
  return (
    <div className="pokemon-detail-container">
      <div className="pokemon-container__title">
        <Title text="Pokémon Detail" />
        <PokemonDetailCard />
      </div>
    </div>
  );
}
