import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/common/Button';
import styles from 'src/SortBycategory/SortBycategory.css';

const SortSearch = ({
  titleActive, genresActive, sortTitles, sortGenres,
}) => (
  <div className="btn-group" role="group" aria-label="Basic example">
        SEARCH BY
    <Button className={styles[`${titleActive === true ? 'active' : 'inactive'}`]} onClick={sortTitles} children="Title" />
    <Button className={styles[`${genresActive === true ? 'active' : 'inactive'}`]} onClick={sortGenres} children="Gengre" />
  </div>
);
SortSearch.propTypes = {
  titleActive: PropTypes.bool.isRequired,
  genresActive: PropTypes.bool.isRequired,
  sortTitles: PropTypes.func.isRequired,
  sortGenres: PropTypes.func.isRequired,
};
export default SortSearch;
