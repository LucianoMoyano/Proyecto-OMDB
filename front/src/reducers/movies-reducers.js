import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES } from "../actions/movies";

const initialState = {
  text: "",
  movie: [],
  movies: [],
};
 
export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
}
