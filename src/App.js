import React from 'react';
import ErrorBoundary from 'Components/common/ErrorBoundary';
import { Provider } from 'react-redux';
import store from 'src/store/store';
import Routes from 'src/Routes';

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </Provider>
);

export default App;
