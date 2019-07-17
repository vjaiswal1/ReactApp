import React from 'react';
import MainContainer from 'src/MainContainer';
import NotFound from 'src/NotFound/NotFound';
import ErrorBoundary from 'Components/common/ErrorBoundary';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from 'src/redux/store';
import history from "src/redux/history";

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <ErrorBoundary>
        <Route path="/" exact component={MainContainer} />
        <Route path="/film/:id" component={MainContainer} />
        <Route component={NotFound} />
      </ErrorBoundary>
    </Router>
  </Provider>
);

export default App;
