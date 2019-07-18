import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieDetailed.css';

const MovieDetailed = ({ singleMovieData }) => {
  const singleMovieDataObject = singleMovieData || {};
  return (
    <div className={globalStyles.media}>
      <img className={globalStyles['mr-3']} src={singleMovieDataObject.poster_path} alt={singleMovieDataObject.title} />
      <div className={globalStyles['media-body']}>
        <div className={globalStyles.clearfix}>
          <h2 className={cx(globalStyles['float-left'], globalStyles['mt-0'])}>{singleMovieDataObject.title}</h2>
          <span className={cx(globalStyles.border, globalStyles['border-secondary'], globalStyles['rounded-circle'], globalStyles['mt-1'], globalStyles['ml-4'], globalStyles['pt-1'], globalStyles['pr-2'], globalStyles['pb-1'], globalStyles['pl-2'], globalStyles['float-left'])}><small>{singleMovieDataObject.vote_average}</small></span>
        </div>
        <p>
          <strong className={styles.detailedMovie_Text}>{singleMovieDataObject.releaseDate}</strong>
          year
          <strong className={styles.detailedMovie_Text}>{singleMovieDataObject.runtime}</strong>
          min
        </p>
        <p>{singleMovieDataObject.overview}</p>
      </div>
    </div>
  );
};
MovieDetailed.propTypes = {
  singleMovieData: PropTypes.object,
};

export default MovieDetailed;
