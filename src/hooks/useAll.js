import { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/fetchApi';

export const useAll = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const characters = await fetchCharacters();
      setCharacters(characters);
      setLoading(false);
    };
    loadCharacters();
  }, []);

  return { characters, loading };
};
