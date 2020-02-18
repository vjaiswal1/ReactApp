import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'Components/common/Button';
import cx from 'classnames';
import { setSortByRating, setSortByReleaseDate } from './SortByCategoryActions';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './SortByCategory.css';

const SortByCategory = ({
  activeSort, count, dispatchSetSortByRating, dispatchSetSortByReleaseDate,
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
      <Button className={`cx(globalStyles['btn-sm'], globalStyles['ml-1']) ${activeSort === 'release' ? styles.active : styles.inactive}`} onClick={dispatchSetSortByReleaseDate} children="RELEASE DATE" />
      <Button className={`cx(globalStyles['btn-sm'], globalStyles['ml-1']) ${activeSort === 'rating' ? styles.active : styles.inactive}`} onClick={dispatchSetSortByRating} children="RATING" />
    </div>
  </div>
);
SortByCategory.propTypes = {
  activeSort: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  dispatchSetSortByRating: PropTypes.func.isRequired,
  dispatchSetSortByReleaseDate: PropTypes.func.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  dispatchSetSortByRating: () => {
    dispatch(setSortByRating());
  },
  dispatchSetSortByReleaseDate: () => {
    dispatch(setSortByReleaseDate());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortByCategory);
