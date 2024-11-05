import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import './Pokemon.css';

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [pokemonDetails, setPokemon] = useState({});
  const cacheValues = useRef({});

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setPokemonList(response.data.results);
    };

    fetchPokemons();
  }, []);

  const fetchPokemonDetails = async (url) => {
    const response = await axios.get(url);
    if (cacheValues.current[url]) {
        setPokemon(cacheValues.current[url]);
        return;
    }
    
    cacheValues.current[url] = response.data
    setPokemon(response.data);
  }

  const handleSelectChange = (e) => {
    setSelectedPokemon(e.target.value);
    fetchPokemonDetails(e.target.value);
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Pokemon Selector</h1>

      <div className="w-full max-w-md">
        <label className="block text-white text-lg font-semibold mb-2" htmlFor="pokemon-select">
          Choose a Pokemon:
        </label>
        <select
          id="pokemon-select"
          value={selectedPokemon}
          onChange={handleSelectChange}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select a Pokémon</option>
          {pokemonList.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.url}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {pokemonDetails.name && (
        <div className="mt-8 w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}
          </h2>
          <p className="text-gray-700">
            <span className="font-semibold">Height:</span> {pokemonDetails.height}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Weight:</span> {pokemonDetails.weight}
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Abilities:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {pokemonDetails.abilities?.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
