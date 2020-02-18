import { SET_SORT_BY_RATING, SET_SORT_BY_RELEASEDATE } from './SortByCategoryActions';

function SortByCategoryReducer(state = {
  activeSort: 'release',
}, action) {
  switch (action.type) {
    case SET_SORT_BY_RATING:
      return {
        ...state,
        activeSort: 'rating',
      };
    case SET_SORT_BY_RELEASEDATE:
      return {
        ...state,
        activeSort: 'release',
      };
    default:
      return state;
  }
}
export default SortByCategoryReducer;
