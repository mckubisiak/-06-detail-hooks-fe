import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const Characterlist = ({ characters }) => (
  <ul aria-label="characters" name="characters">
    {characters.map((character) => (
      <li key={character.image}>
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
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Characterlist;
