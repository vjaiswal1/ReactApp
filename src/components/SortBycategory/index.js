import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import './SortByCategory.css';

const SortByCategory = ({
  releaseActive, ratingActive, sortRelease, sortRating, count,
}) => (
  <div className="clearfix moviesubheadingSection">
    <div className="float-left float-md-left">
      <strong>{count}</strong>
movie found
    </div>
    <div className="float-right float-md-right">
SORT BY
      <Button className={`btn-sm ml-1 ${releaseActive === true ? 'active' : 'inactive'}`} onClick={sortRelease} children="RELEASE DATE" />
      <Button className={`btn-sm ml-1 ${ratingActive === true ? 'active' : 'inactive'}`} onClick={sortRating} children="RATING" />
    </div>
  </div>
);
SortByCategory.propTypes = {
  releaseActive: PropTypes.bool.isRequired,
  ratingActive: PropTypes.bool.isRequired,
  sortRelease: PropTypes.func.isRequired,
  sortRating: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
export default SortByCategory;
