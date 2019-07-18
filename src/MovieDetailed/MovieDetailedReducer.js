import { UPDATE_SINGLEMOVIE_DATA } from './MovieDetailedActions';

function MovieDetailedReducer(state = {
  singleMovieData: null,
}, action) {
  switch (action.type) {
    case UPDATE_SINGLEMOVIE_DATA:
      return {
        ...state,
        singleMovieData: action.singleMovieData,
      };
    default:
      return state;
  }
}
export default MovieDetailedReducer;
