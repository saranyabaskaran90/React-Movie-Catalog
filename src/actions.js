
import {
    API_URL, API_KEY_QUERY_STRING,
    START_FETCHING, SET_PAGE, SET_MOVIE_LIST
} from './constants';


export function getMovieList(payload) {
	return async dispatch => {
		dispatch({ type: START_FETCHING });
		dispatch({ type: SET_PAGE, payload: payload.page });
        const result = await fetch(`${API_URL}?${API_KEY_QUERY_STRING}&s=${payload.s}&page=${payload.page}`);
        const items = await result.json();
        dispatch({ type: SET_MOVIE_LIST, movies: items, qs:payload.s, page:payload.page });
  };
};