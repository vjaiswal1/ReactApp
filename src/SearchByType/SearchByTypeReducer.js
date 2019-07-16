import { SET_SEARCH_BY_TITLE, SET_SEARCH_BY_GENRE } from './SearchByTypeActions';

function SearchByTypeReducer(state = {
  titleActive: true,
  genresActive: false,
}, action) {
  switch (action.type) {
    case SET_SEARCH_BY_TITLE:
      return {
        ...state,
        titleActive: true,
        genresActive: false,
      };
    case SET_SEARCH_BY_GENRE:
      return {
        ...state,
        titleActive: false,
        genresActive: true,
      };
    default:
      return state;
  }
}
export default SearchByTypeReducer;
