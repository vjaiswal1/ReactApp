import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'Components/common/Button';
import cx from 'classnames';
import { setSortByRating, setSortByReleaseDate } from './SortByCategoryActions';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './SortByCategory.css';

const SortByCategory = ({
  releaseActive, ratingActive, count, setSortByRating, setSortByReleaseDate,
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
      <Button className={`cx(globalStyles['btn-sm'], globalStyles['ml-1']) ${releaseActive === true ? styles.active : styles.inactive}`} onClick={setSortByReleaseDate} children="RELEASE DATE" />
      <Button className={`cx(globalStyles['btn-sm'], globalStyles['ml-1']) ${ratingActive === true ? styles.active : styles.inactive}`} onClick={setSortByRating} children="RATING" />
    </div>
  </div>
);
SortByCategory.propTypes = {
  releaseActive: PropTypes.bool.isRequired,
  ratingActive: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  setSortByRating: PropTypes.func.isRequired,
  setSortByReleaseDate: PropTypes.func.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  setSortByRating: () => {
    dispatch(setSortByRating());
  },
  setSortByReleaseDate: () => {
    dispatch(setSortByReleaseDate());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortByCategory);
