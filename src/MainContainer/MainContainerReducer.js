import {
  RECEIVE_API_DATA,
  CLICK_REQUEST_DATA,
  REQUEST_API_DATA,
} from './MainContainerActions';

function MainContainerReducer(state = {
  inputs: '',

}, action) {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        response: action.response,
      };
    case RECEIVE_API_DATA:
      return {
        ...state,
        response: action.response,
      };
    case CLICK_REQUEST_DATA:
      return {
        ...state,
        params: action.params,
      };
    default:
      return state;
  }
}
export default MainContainerReducer;

