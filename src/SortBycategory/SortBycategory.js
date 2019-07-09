import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/common/Button';
import styles from './SortByCategory.css';

const SortByCategory = ({
  releaseActive, ratingActive, sortRelease, sortRating,
}) => (
  <div className={styles['moviesubheadingSection clearfix']}>
    <div className={styles['float-left float-md-left']}>

movie found
    </div>
    <div className={styles['float-right float-md-right']}>
SORT BY
      <Button className={styles[`btn-sm ml-1 ${releaseActive === true ? 'active' : 'inactive'}`]} onClick={sortRelease} children="RELEASE DATE" />
      <Button className={styles[`btn-sm ml-1 ${ratingActive === true ? 'active' : 'inactive'}`]} onClick={sortRating} children="RATING" />
    </div>
  </div>
);
SortByCategory.propTypes = {
  releaseActive: PropTypes.bool.isRequired,
  ratingActive: PropTypes.bool.isRequired,
  sortRelease: PropTypes.func.isRequired,
  sortRating: PropTypes.func.isRequired,
};
export default SortByCategory;
