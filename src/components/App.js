import React from 'react';
import MainContainer from './MainContainer/MainContainer';
import ErrorBoundary from './common/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <MainContainer />
  </ErrorBoundary>
);

export default App;
