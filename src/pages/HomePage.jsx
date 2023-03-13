import React, { useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getCharacters } from "../API/charactersAPI";
import { SearchContext } from "../context/SearchProvider";

import Home from "../components/Home";

const HomePage = () => {
  const { searchValue } = useContext(SearchContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const nameQuery = searchParams.get('name') || '';

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
      const data = await getCharacters(searchParams);
      setCharacters(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [searchValue, searchParams]);

  return <Home characters={characters} setSearchParams={setSearchParams} nameQuery={nameQuery} isLoading={isLoading} />
};

export default HomePage;
