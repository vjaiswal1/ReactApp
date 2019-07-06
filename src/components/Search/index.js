import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/common/Button';
import './Search.css';

const Search = ({ resultsQuery, onKeyHandle }) => (
  <form className="navbar-form navbar-left" role="search">
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Enter movie's name" onChange={onKeyHandle} />
      <div className="input-group-append">
        <Button className="searchBtn" onClick={resultsQuery} children="Search" />
      </div>
    </div>
  </form>
);
Search.propTypes = {
  resultsQuery: PropTypes.func.isRequired,
  onKeyHandle: PropTypes.func.isRequired,
};

export default Search;
