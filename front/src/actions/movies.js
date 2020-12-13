import axios from "axios";

export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE = "FETCH_MOVIE";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?i=tt3896198&apikey=c60b09c&s=${text}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search,
      })
    );
}; 

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=c60b09c&i=${id}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
      })
    );
};
