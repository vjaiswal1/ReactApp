import {
  call, put, takeEvery, select, all,
} from 'redux-saga/effects';
import { moviesData } from 'src/api';
import { detailedMovieApi } from 'src/api/detailedMovieApi';
import {
  RECEIVE_API_DATA,
  receiveApiData,
  CLICK_REQUEST_DATA,
  clickStoreData,
} from '../actions';


const getPage = state => state.nextPage;
function* fetchProducts() {
  const page = yield select(getPage);
  const dataDetail = yield call(moviesData, page);
  yield put(receiveApiData(dataDetail));
}
function* clickUpdateData(action) {
  try {
    while (true) {
      const page = yield select(getPage);
      const dataDetail = yield call(
        detailedMovieApi,
        action.params,
        action.data,
        page,
      );
      yield put(clickStoreData(dataDetail));
    }
  } finally {
    if (yield cancelled()) yield put(actions.requestFailure('Sync cancelled!'));
  }
}

function* mySaga() {
  yield all([RECEIVE_API_DATA, fetchProducts()]);
  yield takeEvery(CLICK_REQUEST_DATA, clickUpdateData);
}
export default mySaga;
