import React from "react";

import Search from "./Search/Search";
import CharacterList from "../CharactersList";
import logo from "../../assets/img/logo.jpg";

import classes from "./Home.module.scss";

const Home = ({characters}) => {
  return (
    <>
      <img className={classes.logo} src={logo} alt="logo" />
      <Search />
      <CharacterList characters={characters}/>
    </>
  );
};

export default Home;
