import { SET_SORT_BY_RATING, SET_SORT_BY_RELEASEDATE } from './SortByCategoryActions';

function SortByCategoryReducer(state = {
  releaseActive: false,
  ratingActive: true,
}, action) {
  switch (action.type) {
    case SET_SORT_BY_RATING:
      return {
        ...state,
        releaseActive: false,
        ratingActive: true,
      };
    case SET_SORT_BY_RELEASEDATE:
      return {
        ...state,
        releaseActive: true,
        ratingActive: false,
      };
    default:
      return state;
  }
}
export default SortByCategoryReducer;
