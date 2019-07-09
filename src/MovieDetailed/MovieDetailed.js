import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetailed.css';

const MovieDetailed = ({ singleMovieData }) => (
  <div className={styles.media}>
    <img className={styles['mr-3']} src={singleMovieData.poster_path} alt={singleMovieData.title} />
    <div className={styles['media-body']}>
      <div className={styles.clearfix}>
        <h2 className={styles['float-left mt-0']}>{singleMovieData.title}</h2>
        <span className={styles['border border-secondary rounded-circle mt-1 ml-4 pt-1 pr-2 pb-1 pl-2 float-left']}><small>{singleMovieData.vote_average}</small></span>
      </div>
      <p>
        <strong className={styles.detailedMovie_Text}>{singleMovieData.releaseDate}</strong>
        year
        <strong className={styles.detailedMovie_Text}>{singleMovieData.runtime}</strong>
        min
      </p>
      <p>{singleMovieData.overview}</p>
    </div>
  </div>
);
MovieDetailed.propTypes = {
  singleMovieData: PropTypes.object.isRequired,
};

export default MovieDetailed;
