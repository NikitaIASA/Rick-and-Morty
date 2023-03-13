import React from "react";
import { Link } from "react-router-dom";

import classes from "./CharacterCard.module.scss";

const CharacterCard = ({ image, name, species, id }) => {
  return (
    <div className={classes.characterCard}>
      <img className={classes.image} src={image} alt={name} />
      <div className={classes.description}>
        <Link to={`./character/${id}`}>
          <h2 className={classes.name}>{name}</h2>
          <p className={classes.species}>{species}</p>
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
