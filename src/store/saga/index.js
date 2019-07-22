import {
  call,
  put,
  select,
  all,
  takeLatest,
} from "redux-saga/effects";
import { moviesData } from "src/api";
import { fetchSingleMovieData } from "src/api/detailedMovieApi";
import {
  RECEIVE_API_DATA,
  receiveApiData,
} from "src/MovieList/MovieListActions";
import {
  SINGLEMOVIE_FETCH_REQUESTED,
  singleMovieFetchSucceeded,
} from "src/MovieDetailed/MovieDetailedActions";

const getPage = state => state.nextPage;
function* fetchProducts() {
  const page = yield select(getPage);
  const dataDetail = yield call(moviesData, page);
  yield put(receiveApiData(dataDetail));
}

function* onMovieClicked(action) {
  const page = yield select(getPage);
  const dataDetail = yield call(fetchSingleMovieData, action.movieId, page);
  yield put(singleMovieFetchSucceeded(dataDetail));
}

function* sagaOutput() {
  yield all([RECEIVE_API_DATA, fetchProducts()]);
  yield takeLatest(SINGLEMOVIE_FETCH_REQUESTED, onMovieClicked);
}
export default sagaOutput;
