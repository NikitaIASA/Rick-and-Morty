import React from "react";

import Search from "../Search";
import CharactersDashboard from "../CharactersDashboard";
import NotFound from "../NotFound"
import logo from "../../assets/img/logo.jpg";

import classes from "./Home.module.scss";

const Home = ({ characters, setSearchParams, nameQuery, isLoading }) => (
  <>
    <img className={classes.logo} src={logo} alt="logo" />
    <Search setSearchParams={setSearchParams} nameQuery={nameQuery} />
    {characters 
      ? (
        <CharactersDashboard characters={characters} isLoading={isLoading}/>
     ) : (
        <NotFound />
    )}
  </>
);

export default Home;
