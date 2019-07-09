import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/common/Button';
import cx from 'classnames';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './SortByCategory.css';

const SortByCategory = ({
  releaseActive, ratingActive, sortRelease, sortRating, count,
}) => (
  <div className={cx(styles.moviesubheadingSection, globalStyles.clearfix)}>
    <div className={cx(globalStyles['float-left'], globalStyles['float-md-left'])}>
      <strong>
        {count}
      </strong>
        movie found
    </div>
    <div className={cx(globalStyles['float-right'], globalStyles['float-md-right'])}>
      SORT BY
      <Button className={`cx(globalStyles['btn-sm'], globalStyles['ml-1']) ${releaseActive === true ? styles.active : styles.inactive}`} onClick={sortRelease} children="RELEASE DATE" />
      <Button className={`cx(globalStyles['btn-sm'], globalStyles['ml-1']) ${ratingActive === true ? styles.active : styles.inactive}`} onClick={sortRating} children="RATING" />
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
