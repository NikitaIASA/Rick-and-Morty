import React, { useContext } from "react";

import { SearchContext } from "../../context/SearchProvider";
import Search from "./Search/Search";
import CharacterList from "../CharactersList";
import logo from "../../assets/img/logo.jpg";

import classes from "./Home.module.scss";

const Home = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  return (
    <>
      <img className={classes.logo} src={logo} alt="logo" />
      <Search />
      <CharacterList/>
    </>
  );
};

export default Home;
