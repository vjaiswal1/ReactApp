import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from 'src/MovieList';
import Movie from 'src/Movie';
import NotFound from 'src/NotFound/NotFound';
import history from 'src/store/history';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={MovieList} />
      <Route path="/film/:id" component={Movie} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
