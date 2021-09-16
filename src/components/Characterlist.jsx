import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const Characterlist = ({ characters }) => (
  <ul aria-label="characters" name="characters">
    {characters.map((character) => (
      <li key={character.id}>
        <Character
          id={character.id}
          name={character.name}
          image={character.image}
        />
      </li>
    ))}
  </ul>
);

Characterlist.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.isRequired,
    })
  ).isRequired,
};

export default Characterlist;
