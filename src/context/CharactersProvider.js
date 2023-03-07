import React, { useEffect, useState } from "react";

import { getCharacters } from "../API/charactersAPI";

export const CharactersContext = React.createContext();

export const CharacterProvider = ({ children }) => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    setIsLoading(true);
    try {
        const data = await getCharacters();
        setCharacters(data);
        setIsLoading(false)
    } catch (err) {
        console.log(err);
        setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, [])

  return (
    <CharactersContext.Provider value={{ characters, isLoading, fetchCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};
