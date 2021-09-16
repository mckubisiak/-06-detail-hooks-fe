import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Character from '../components/Character';
import { fetchCharacterById } from '../services/fetchApi';

const CharacterDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [chartacter, setCharacter] = useState({});

  useEffect(() => {
    const loadDetails = async () => {
      const charcter = await fetchCharacterById(id);
      setCharacter(charcter);
      setLoading(false);
    };
    loadDetails();
  }, [id]);

  if (loading) return (
    <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />);
  
  return <Character {...chartacter} />;
};

export default CharacterDetails;
