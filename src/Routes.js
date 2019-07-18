import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from 'src/MovieList';
import MovieComponent from 'src/MovieDetailed/MovieComponent';
import NotFound from 'src/NotFound/NotFound';
import history from 'src/store/history';

const Routes = () => (
  <Router history={history}>
    <Route path="/" exact component={MovieList} />
    <Route path="/film/:id" component={MovieComponent} />
    <Route component={NotFound} />
  </Router>
);

export default Routes;
