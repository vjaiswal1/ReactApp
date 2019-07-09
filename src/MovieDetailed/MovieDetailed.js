import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieDetailed.css';

const MovieDetailed = ({ singleMovieData }) => (
  <div className={globalStyles.media}>
    <img className={globalStyles['mr-3']} src={singleMovieData.poster_path} alt={singleMovieData.title} />
    <div className={globalStyles['media-body']}>
      <div className={globalStyles.clearfix}>
        <h2 className={cx(globalStyles['float-left'], globalStyles['mt-0'])}>{singleMovieData.title}</h2>
        <span className={cx(globalStyles.border, globalStyles['border-secondary'], globalStyles['rounded-circle'], globalStyles['mt-1'], globalStyles['ml-4'], globalStyles['pt-1'], globalStyles['pr-2'], globalStyles['pb-1'], globalStyles['pl-2'], globalStyles['float-left'])}><small>{singleMovieData.vote_average}</small></span>
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
