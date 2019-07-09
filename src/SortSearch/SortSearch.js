import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/common/Button';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './SortSearch.css';

const SortSearch = ({
  titleActive, genresActive, sortTitles, sortGenres,
}) => (
  <div className={globalStyles['btn-group']} role="group" aria-label="Basic example">
        SEARCH BY
    <Button className={`${titleActive === true ? styles.active : styles.inactive}`} onClick={sortTitles} children="Title" />
    <Button className={`${genresActive === true ? styles.active : styles.inactive}`} onClick={sortGenres} children="Gengre" />
  </div>
);
SortSearch.propTypes = {
  titleActive: PropTypes.bool.isRequired,
  genresActive: PropTypes.bool.isRequired,
  sortTitles: PropTypes.func.isRequired,
  sortGenres: PropTypes.func.isRequired,
};
export default SortSearch;
