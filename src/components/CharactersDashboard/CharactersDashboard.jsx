import React from "react";

import CharacterCard from "../CharacterCard";
import Skeleton from "../Skeleton";

import classes from "./CharactersDashboard.module.scss";

const CharactersDashboard = ({ isLoading, characters }) => {
  const sortedCharacters = characters && characters.sort((a, b) => a.name.localeCompare(b.name));

  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  console.log(sortedCharacters);

  return (
    <div className={classes.characters}>
      {isLoading 
        ? skeletons 
        : sortedCharacters && sortedCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            image={character.image}
            name={character.name}
            species={character.species}
          />
        ))}
    </div>
  );
};

export default CharactersDashboard;
