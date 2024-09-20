import  { useState, useEffect } from "react";
import axios from "axios";

const PokemonCard = ({ name, url }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(url);
        setImage(response.data.sprites.front_default);
      } catch (error) {
        console.error("Error fetching Pokémon image:", error);
      }
    };
    fetchImage();
  }, [url]);

  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default PokemonCard;
