import React from "react";
import { Link } from "react-router-dom";

function Movies(props) {
  return (
    <div className="col-md-3 mb-5">
      <div className="card card-body bg-dark text-center h-100">
        <img
          className="w-100 mb-2"
          src={props.movie.Poster}
          alt="Movie Cover"
        />
        <h5 className="text-light card-title">
          {props.movie.Title} - {props.movie.Year}
        </h5>
        <Link class="btn btn-outline-warning"  to={`/movie/${props.movie.imdbID}`}>
          Mas info +
          <i className="fas fa-chevron-right" />
        </Link>
      </div>
    </div>
  );
}
 
export default Movies;
