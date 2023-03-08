import React, { useState, useContext, useEffect } from "react";

import { getCharacters } from "../API/charactersAPI";
import { SearchContext } from "../context/SearchProvider";

import Home from "../components/Home";

const HomePage = () => {
  const { searchValue } = useContext(SearchContext);

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    const search = searchValue ? `name=${searchValue}` : "";
    
    setIsLoading(true);
    try {
      const data = await getCharacters(search);
      setCharacters(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [searchValue]);

  return <Home characters={characters} />;
};

export default HomePage;
