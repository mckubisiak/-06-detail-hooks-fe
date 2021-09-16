import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ id, name, image }) => (
  <>
    <Link to={`/${id}`}>{name}</Link>
    <img src={image} alt={name}/>
  </>
);

Character.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
