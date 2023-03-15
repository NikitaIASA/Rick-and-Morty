import React from "react";
import { Link } from "react-router-dom";

import classes from "./CharacterCard.module.scss";

const CharacterCard = ({ image, name, species, id }) => (
  <div className={classes.card}>
    <Link to={`./character/${id}`}>
      <img className={classes.image} src={image} alt={name} />
      <div className={classes.description}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.species}>{species}</p>
      </div>
    </Link>
  </div>
);

export default CharacterCard;
