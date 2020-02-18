import { SET_SEARCH_BY_TITLE, SET_SEARCH_BY_GENRE } from './SearchByTypeActions';

function SearchByTypeReducer(state = {
  activeSearch: 'title',
}, action) {
  switch (action.type) {
    case SET_SEARCH_BY_TITLE:
      return {
        ...state,
        activeSearch: 'title',
      };
    case SET_SEARCH_BY_GENRE:
      return {
        ...state,
        activeSearch: 'genre',
      };
    default:
      return state;
  }
}
export default SearchByTypeReducer;
