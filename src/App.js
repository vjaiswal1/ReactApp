import React from 'react';
import MainContainer from 'Utilities/MainContainer';
import ErrorBoundary from 'Components/common/ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <MainContainer />
  </ErrorBoundary>
);

export default App;
