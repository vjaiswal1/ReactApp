import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSearchText } from './SearchActions';
import Button from 'Components/common/Button';
import cx from 'classnames';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './Search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSearchTextChange = (e) => {
    this.props.updateSearchText(e.target.value);
  }
  render() {
    const  { inputs } = this.props;
    return (
      <form className={cx(globalStyles['navbar-form'], globalStyles['navbar-left'])} role="search">
        <div className={cx(globalStyles['input-group'], globalStyles['mb-3'])}>
          <input type="text" value={inputs} className={globalStyles['form-control']} placeholder="Enter movie's name" onChange={this.handleSearchTextChange} />
          <div className="input-group-append">
            <Button className={styles.searchBtn} children="Search" />
          </div>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  updateSearchText: PropTypes.func.isRequired,
  inputs: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  inputs: state.SearchReducer.inputs,
});

const mapDispatchToProps = dispatch => ({updateSearchText: searchText => {
  dispatch(updateSearchText(searchText));
},});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
