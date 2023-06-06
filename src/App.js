import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Pokédex</h1>
      <ul className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
