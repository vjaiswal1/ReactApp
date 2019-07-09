import React from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/common/Button';
import cx from 'classnames';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './Search.css';

const Search = ({ resultsQuery, onKeyHandle }) => (
  <form className={cx(globalStyles['navbar-form'], globalStyles['navbar-left'])} role="search">
    <div className={cx(globalStyles['input-group'], globalStyles['mb-3'])}>
      <input type="text" className={globalStyles['form-control']} placeholder="Enter movie's name" onChange={onKeyHandle} />
      <div className="input-group-append">
        <Button className={styles.searchBtn} onClick={resultsQuery} children="Search" />
      </div>
    </div>
  </form>
);
Search.propTypes = {
  resultsQuery: PropTypes.func.isRequired,
  onKeyHandle: PropTypes.func.isRequired,
};

export default Search;
