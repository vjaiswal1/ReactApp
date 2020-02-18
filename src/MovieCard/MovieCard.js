import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieCard.css';

const MovieCard = ({ title, releaseDate, genres }) => (
  <div className={styles['card-body']}>
    <h5 className={globalStyles['card-title']}>{title}</h5>
    <p className={cx(globalStyles['card-text'], globalStyles.clearfix)}>
      <span className={globalStyles['float-left']}>{title}</span>
      <span className={cx(styles['card-releaseDate'], globalStyles['float-right'])}>{releaseDate}</span>
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
