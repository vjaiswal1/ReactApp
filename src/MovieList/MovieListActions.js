const REQUEST_API_DATA = 'REQUEST_API_DATA';
const RECEIVE_API_DATA = 'RECEIVE_API_DATA';
const CLICK_REQUEST_DATA = 'CLICK_REQUEST_DATA';

const requestApiData = response => ({ type: REQUEST_API_DATA, response });
const receiveApiData = response => ({ type: RECEIVE_API_DATA, response });
const clickStoreData = params => ({ type: CLICK_REQUEST_DATA, params });

export {
  REQUEST_API_DATA,
  RECEIVE_API_DATA,
  CLICK_REQUEST_DATA,
  requestApiData,
  receiveApiData,
  clickStoreData,
};