import React, { useContext } from "react";

import { CharactersContext } from "../../context/CharactersProvider";
import CharacterCard from "../CharacterCard";

import classes from "./Characters.module.scss";

const CharactersList = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <div className={classes.characters}>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          image={character.image}
          name={character.name}
          species={character.species}
        />
      ))}
    </div>
  );
};

export default CharactersList;
