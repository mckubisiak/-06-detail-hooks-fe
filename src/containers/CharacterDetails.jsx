import React from 'react';
import Character from '../components/Character';
import { useDetail } from '../hooks/useDetail';

const CharacterDetails = () => {
  const { character, loading } = useDetail();

  if (loading) return (
    <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />);
  
  return <Character {...character} />;
};

export default CharacterDetails;
