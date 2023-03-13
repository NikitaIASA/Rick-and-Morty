import React from "react";

import CharacterCard from "../CharacterCard";
import Skeleton from "../Skeleton";

import classes from "./Characters.module.scss";

const CharactersList = ({ characters, isLoading }) => {
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const characterBlocks = characters.map((character) => (
    <CharacterCard
      key={character.id}
      id={character.id}
      image={character.image}
      name={character.name}
      species={character.species}
    />
  ));

  return (
    <div className={classes.characters}>
      {isLoading ? skeletons : characterBlocks}
    </div>
  );
};

export default CharactersList;
