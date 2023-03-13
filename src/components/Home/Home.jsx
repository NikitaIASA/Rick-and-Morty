import React from "react";

import Search from "../Search";
import CharacterList from "../CharactersList";
import logo from "../../assets/img/logo.jpg";

import classes from "./Home.module.scss";

const Home = ({characters, setSearchParams, nameQuery, isLoading}) => {
  return (
    <>
      <img className={classes.logo} src={logo} alt="logo" />
      <Search setSearchParams={setSearchParams} nameQuery={nameQuery} />
      <CharacterList characters={characters} isLoading={isLoading}/>
    </>
  );
};

export default Home;
