import React from 'react';
import MainContainer from 'src/MainContainer';
import ErrorBoundary from 'Components/common/ErrorBoundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <MainContainer />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
);

export default App;
