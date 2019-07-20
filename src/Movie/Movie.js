import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { detailedMovieApi } from 'src/api/detailedMovieApi';
import MovieDetailed from 'src/MovieDetailed/MovieDetailed';
import { updateSingleMovieData } from 'src/MovieDetailed/MovieDetailedActions';

class Movie extends Component {
  componentDidMount() {
    const { dispatchUpdateSingleMovieData, match } = this.props;
    const id = match && match.params ? match.params.id : 0;
    detailedMovieApi(id).then((response) => {
      dispatchUpdateSingleMovieData(response);
    });
  }

  render() {
    const { singleMovieData } = this.props;
    return (<MovieDetailed singleMovieData={singleMovieData} />);
  }
}

Movie.propTypes = {
  dispatchUpdateSingleMovieData: PropTypes.func.isRequired,
  singleMovieData: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  singleMovieData: state.MovieDetailedReducer.singleMovieData,
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdateSingleMovieData: (singleMovieData) => {
    dispatch(updateSingleMovieData(singleMovieData));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
