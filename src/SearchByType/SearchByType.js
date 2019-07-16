import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'Components/common/Button';
import { setSearchByTitle, setSearchByGenre } from './SearchByTypeActions';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './SearchByType.css';

const SearchByType = ({
  titleActive, genresActive, dispatchSetSearchByTitle, dispatchSetSearchByGenre,
}) => (
  <div className={globalStyles['btn-group']} role="group" aria-label="Basic example">
        SEARCH BY
    <Button className={`${titleActive === true ? styles.active : styles.inactive}`} onClick={dispatchSetSearchByTitle} children="Title" />
    <Button className={`${genresActive === true ? styles.active : styles.inactive}`} onClick={dispatchSetSearchByGenre} children="Gengre" />
  </div>
);
SearchByType.propTypes = {
  titleActive: PropTypes.bool.isRequired,
  genresActive: PropTypes.bool.isRequired,
  dispatchSetSearchByTitle: PropTypes.func.isRequired,
  dispatchSetSearchByGenre: PropTypes.func.isRequired,
};
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  dispatchSetSearchByTitle: () => {
    dispatch(setSearchByTitle());
  },
  dispatchSetSearchByGenre: () => {
    dispatch(setSearchByGenre());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchByType);
