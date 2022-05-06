import React from "react";
import PokemonDetailCard from "../../Components/PokemonDetailCard/PokemonDetailCard";
import Title from "../../Components/Title/Title";
import "./Pokemon.scss";
import { Link } from "react-router-dom";
import ScrollButton from "../../Components/ScrollButton/ScrollButton";

export default function Pokemon() {
  return (
    <div className="pokemon-detail__main-container">
      <div className="pokemon-container__title">
        <div className="title-container">
          <Title text="Pokémon Detail" smaller={true} />
          <Link className="goback-btn" to="/">
            {"<"}
          </Link>
        </div>
        <PokemonDetailCard />
        <ScrollButton />
      </div>
    </div>
  );
}
