
import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import movieReducer from 'Components/reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from 'Components/saga';


const allReducers = combineReducers({
  movieReducer,
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
