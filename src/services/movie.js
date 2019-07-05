const BASE_URL = 'https://reactjs-cdp.herokuapp.com/movies/';
const MovieApi = id => fetch(`${BASE_URL}${id}`).then(res => res.json());

export default MovieApi;
