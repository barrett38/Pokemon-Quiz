import React, { useState, useEffect } from "react";

const PokemonQuiz = () => {
  const [pokemon, setPokemon] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    const fetchedPokemon = await getPokemon();
    const correctName = fetchedPokemon.name;
    const allOptions = [correctName, ...generateRandomOptions(correctName)];
    setPokemon(fetchedPokemon);
    setOptions(shuffleArray(allOptions));
    setSelectedOption(null);
    setIsCorrect(false);
  };

  const generateRandomOptions = (correctName) => {
    // Generate 3 random options that are not the correct name
  };

  const shuffleArray = (array) => {
    // Shuffle the array to randomize the order of options
  };
};
