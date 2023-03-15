import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSnackbar } from 'notistack';

import { getCharacterById } from "../api/charactersAPI";
import Character from "../components/CharacterProfile";

const CharacterPage = () => {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function loadCharacterData () {
        try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (err) {
        enqueueSnackbar("There is an error with data fetching!", {variant: 'error'});
      }
    }
    
    loadCharacterData();
  }, [id, enqueueSnackbar]);

  return character && (<Character {...character} />);
};

export default CharacterPage;
