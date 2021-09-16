import React from 'react';
import Characterlist from '../components/Characterlist';
import { useAll } from '../hooks/useAll';

const RickAndMortyApi = () => {
  const { characters, loading } = useAll();

  if (loading)
    return (
      <img src="https://i.redd.it/o6m7b0l6h6pz.gif" alt="loading spinner" />
    );

  return <Characterlist characters={characters} />;
};

export default RickAndMortyApi;
