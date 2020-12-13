import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchMovie } from "../actions/movies";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export class Movie extends Component {
  
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 card card-body" >
              <div className="card card-body bg-dark text-center h-100">
                <img
                  className="thumbnail"
                  src={this.props.movie.Poster}
                  alt="Movie Cover"
                />
                <h5 className="text-light card-title">
                  {this.props.movie.Title} - {this.props.movie.Year}
                </h5>
                 
                <Link to="/" className="btn btn-outline-warning text-white">
                 Volver a buscar
                </Link>
              </div>
            </div>
            <div className="col">
            <span>
              <ul className="list-group list-group-flush">
                  <li class="list-group-item">
                    <strong>Genero:</strong> {this.props.movie.Genre}
                  </li>
                  <li className="list-group-item">
                    <strong>Director:</strong> {this.props.movie.Director}
                  </li>
                  <li className="list-group-item">
                    <strong>Actores:</strong> {this.props.movie.Actors}
                  </li>
                  <li className="list-group-item">
                    <strong>Clasificacion: </strong> {this.props.movie.Rated}
                  </li>
                  <li className="list-group-item">
                    <strong>Fecha de estreno:</strong> {this.props.movie.Released}
                  </li>
                  <li className="list-group-item">
                    <strong>Escritores:</strong> {this.props.movie.Writer}
                  </li>
                  <li className="list-group-item">
                    <strong>Duracion:</strong> {this.props.movie.Runtime}
                  </li>
                  <li className="list-group-item">
                    <p>
                      <strong>Trama:</strong> {this.props.movie.Plot}
                    </p>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.moviesReducers.movie,
});

export default connect(mapStateToProps, { fetchMovie })(Movie);
