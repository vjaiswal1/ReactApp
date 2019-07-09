import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.css';

const MovieCard = ({ title, releaseDate, genres }) => (
  <div className={styles['card-body']}>
    <h5 className={styles['card-title']}>{title}</h5>
    <p className={styles['card-text clearfix']}>
      <span className={styles['float-left']}>{title}</span>
      <span className={styles['card-releaseDate float-right']}>{releaseDate}</span>
    </p>
    <p className={styles.movieGenres}>{genres.join(' & ')}</p>
  </div>
);
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genres: PropTypes.node.isRequired,
};

export default MovieCard;
