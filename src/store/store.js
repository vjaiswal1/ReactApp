
import {
  createStore, 
  applyMiddleware, 
  combineReducers, 
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import MovieListReducer from '../MovieList/MovieListReducer';
import SearchReducer from '../Search/SearchReducer';
import SearchByTypeReducer from '../SearchByType/SearchByTypeReducer';
import SortByCategoryReducer from '../SortByCategory/SortByCategoryReducer';
import MovieDetailedReducer from '../MovieDetailed/MovieDetailedReducer';
import mySaga from './saga';

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
sagaMiddleware.run(mySaga);
export default store;
