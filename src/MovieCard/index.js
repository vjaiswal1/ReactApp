import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ title, releaseDate, genres }) => (
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text clearfix">
      <span className="float-left">{title}</span>
      <span className="card-releaseDate float-right">{releaseDate}</span>
    </p>
    <p className="movieGenres">{genres.join(' & ')}</p>
  </div>
);
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genres: PropTypes.node.isRequired,
};

export default MovieCard;
