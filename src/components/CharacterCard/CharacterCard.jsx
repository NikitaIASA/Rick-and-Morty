import React from "react";

import classes from "./CharacterCard.module.scss";

const CharacterCard = ({ image, name, species }) => {
  return (
    <div className={classes.characterCard}>
      <img className={classes.image} src={image} alt={name}/>
      <h2 className={classes.name}>{name}</h2>
      <p className={classes.species}>{species}</p>
    </div>
  );
};

export default CharacterCard;
