import React, { Component } from "react";
import { searchMovie, fetchMovies } from "../actions/movies";
import { connect } from "react-redux";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const evento = evt.target.value;
    this.props.searchMovie(evento);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.fetchMovies(this.props.text);
  }
 
  render() {
    return (
      <div className="d-flex justify-content-center">
        <nav className="navbar navbar-light bg-black">
          <form
            className="form-inline"
            id="searchForm"
            onSubmit={this.handleSubmit}
          >
            <input
              onChange={this.handleChange}
              className="form-control mr-sm-3"
              type="search"
              placeholder="Buscar la pelicula"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-warning my-2 my-sm-0"
              type="submit"
            >
              Buscar
            </button>
          </form> 
        </nav>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state",state)
  return{
  text: state.moviesReducers.text}
}


export default connect(mapStateToProps, { searchMovie, fetchMovies })(
  SearchForm
);
