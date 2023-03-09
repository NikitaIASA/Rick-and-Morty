import React from "react";
import { useNavigate } from "react-router-dom";

import arrowBack from "../../assets/img/arrowBack.svg";
import classes from "./CharacterDetail.module.scss";

const CharacterDetail = ({ image, name, gender, status, specie, origin, type, }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.CharacterDetail}>
        <p className={classes.back} onClick={() => navigate(-1)}>
          <img className={classes.back__img} src={arrowBack} alt="arrowBack" />
          <span className={classes.back__text}>Go Back</span>
        </p>
      <div className={classes.imageBlock}>
        <img className={classes.image} src={image} alt={name} />
      </div>
      <h2 className={classes.name}>{name}</h2>
      <p className={classes.informations}>Informations</p>
      <ul className={classes.list}>
        <li className={classes.item}>
          <p className={classes.item__title}>Gender</p>
          <p className={classes.item__info}>{gender}</p>
        </li>
        <li className={classes.item}>
          <p className={classes.item__title}>Status</p>
          <p className={classes.item__info}>{status}</p>
        </li>
        <li className={classes.item}>
          <p className={classes.item__title}>Specie</p>
          <p className={classes.item__info}>{specie}</p>
        </li>
        <li className={classes.item}>
          <p className={classes.item__title}>Origin</p>
          <p className={classes.item__info}>{origin}</p>
        </li>
        <li className={classes.item}>
          <p className={classes.item__title}>Type</p>
          <p className={classes.item__info}>{type === "" ? "Unknown" : type}</p>
        </li>
      </ul>
    </div>
  );
};

export default CharacterDetail;
