import React from "react";

import CharacterCard from "../CharacterCard";

import classes from "./Characters.module.scss";

const CharactersList = ({characters}) => {
  return (
    <div className={classes.characters}>
      {characters.map((character) => (
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

export default CharactersList;
