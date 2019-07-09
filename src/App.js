import React from 'react';
import MainContainer from 'src/MainContainer';
import ErrorBoundary from 'Components/common/ErrorBoundary';
import { bindActionCreators } from 'redux';
import { requestApiData, clickStoreData } from 'Components/actions';
import { connect } from 'react-redux';

const App = () => (
  <ErrorBoundary>
    <MainContainer />
  </ErrorBoundary>
);

const mapStateToProps = state => ({ movieReducer: state.movieReducer, params: [state.params]});
const mapDispatchToProps = dispatch => bindActionCreators({ requestApiData, clickStoreData },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
