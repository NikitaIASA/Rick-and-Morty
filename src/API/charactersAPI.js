import axios from "../axios";

export const getCharacters = async (search) => {
  try {
    const { data } = await axios.get(`/character/?${search}`);
    return data.results;
  } catch (error) {
    throw new Error("Failed to fetch characters");
  }
};

export const getCharacterById = async (id) => {
  try {
    const { data } = await axios.get(`/character/${id}`);
    return data;
  } catch (error) {
    throw new Error("Failed to fetch character");
  }
};



