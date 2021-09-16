import { useState, useEffect } from 'react';
import { fetchCharacterById } from '../services/fetchApi';
import { useParams } from 'react-router-dom';

export const useDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const loadDetails = async () => {
      const charcter = await fetchCharacterById(id);
      setCharacter(charcter);
      setLoading(false);
    };
    loadDetails();
  }, [id]);

  return { character, loading };

};
