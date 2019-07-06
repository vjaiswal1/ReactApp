import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/common/Button';

const SortSearch = ({
  titleActive, genresActive, sortTitles, sortGenres,
}) => (
  <div className="btn-group" role="group" aria-label="Basic example">
        SEARCH BY
    <Button className={`${titleActive === true ? 'active' : 'inactive'}`} onClick={sortTitles} children="Title" />
    <Button className={`${genresActive === true ? 'active' : 'inactive'}`} onClick={sortGenres} children="Gengre" />
  </div>
);
SortSearch.propTypes = {
  titleActive: PropTypes.bool.isRequired,
  genresActive: PropTypes.bool.isRequired,
  sortTitles: PropTypes.func.isRequired,
  sortGenres: PropTypes.func.isRequired,
};
export default SortSearch;
