import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { getCharacterById } from "../api/charactersAPI";
import Character from "../components/CharacterProfile";

const CharacterPage = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function loadCharacterData () {
        try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (err) {
        alert("There is an error with data fetching!");
      }
    }
    
    loadCharacterData();
  }, [id]);

  return character && (<Character {...character} />);
};

export default CharacterPage;
