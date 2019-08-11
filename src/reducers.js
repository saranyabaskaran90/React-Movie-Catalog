import {
    START_FETCHING, SET_PAGE, SET_MOVIE_LIST
} from './constants';

const initialState = {
    items: {Search: [], totalResults:0},
    page: 1,
    isLoading: false,
    s: '',
  };
  function rootReducer(state = initialState, action) {
    if (action.type === SET_MOVIE_LIST) {
        return {
            ...state,
            items: action.movies, 
            s:action.qs,
            isLoading: false,
            page: action.page
        };
    }
  
    if (action.type === START_FETCHING) {
        return {
            ...state,
            isLoading: true
        };
    }
  
    if (action.type === SET_PAGE) {
        return {
            ...state,
            page: action.payload
        };
    }
    return state;
  }

  export default rootReducer;