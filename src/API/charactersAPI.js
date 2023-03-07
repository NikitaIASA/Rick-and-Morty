import axios from "axios";

export const getCharacters = async (name) => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);
    return data.results;
  } catch (error) {
    throw new Error("Failed to fetch characters");
  }
};

export const getCharacterById = async (id) => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch character");
  }
};



