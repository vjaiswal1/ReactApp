
import {
  createStore, 
  applyMiddleware, 
  combineReducers, 
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import MovieListReducer from 'src/MovieList/MovieListReducer';
import SearchReducer from 'src/Search/SearchReducer';
import SearchByTypeReducer from 'src/SearchByType/SearchByTypeReducer';
import SortByCategoryReducer from 'src/SortByCategory/SortByCategoryReducer';
import MovieDetailedReducer from 'src/MovieDetailed/MovieDetailedReducer';
import sagaOutput from './saga';

const allReducers = combineReducers({
  MovieListReducer,
  SearchReducer,
  SearchByTypeReducer,
  SortByCategoryReducer,
  MovieDetailedReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  allReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
sagaMiddleware.run(sagaOutput);
export default store;
