import { useState,useEffect } from "react";
import axios from "axios";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import Search from "./components/Search/Search";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
        setPokemon(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    fetchData();
  }, []);

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Pokémon Search</h1>
      <Search setSearchTerm={setSearchTerm} />
      <div className="pokemon-list">
        {filteredPokemon.map((poke, index) => (
          <PokemonCard key={index} name={poke.name} url={poke.url} />
        ))}
      </div>
    </div>
  );
}

export default App;
