import axios from "axios";

const getPokemon = async () => {
  const id = Math.floor(Math.random() * 150) + 1;
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};
