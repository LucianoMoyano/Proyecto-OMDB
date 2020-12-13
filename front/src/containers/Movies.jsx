import React, { Component } from "react";
import { connect } from "react-redux";
import MoviesComponent from "../components/Movies";
import NotFound from "../components/NotFound";

export class Movies extends Component {
  render() {
    const { movies } = this.props;
    
    /* let content = ""; */

    /*     content =
      movies.length > 0 ? movies.map((movie) => <MoviesComponent key = {movie.imdbID} movie={movie} />) : null; */

    return (
      <div>
      <span className="border border-white">
      <div className="container" >
        <div className="row" >
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MoviesComponent movie={movie} key={movie.imdbID} />
            ))
          ) : movies === undefined ? (
            <NotFound />
          ) : null}
        </div>
      </div>
      </span>
      </div>
       
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducers.movies,
});

export default connect(mapStateToProps)(Movies);
