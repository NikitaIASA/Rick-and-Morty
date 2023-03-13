import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { getCharacterById } from "../API/charactersAPI";
import CharacterDetail from "../components/CharacterDetail";

const CharacterDetailPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  const fetchCharacter = async () => {
    setIsLoading(true);
    try {
      const data = await getCharacterById(id);
      setCharacter(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <>
      {character && (
        <CharacterDetail
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          specie={character.species}
          origin={character.origin.name}
          gender={character.gender}
          type={character.type}
        />
      )}
    </>
  );
};

export default CharacterDetailPage;
