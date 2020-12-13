import React, { Component } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchForm from "./SearchForm";
import Movies from "./Movies";
import {fetchMovies }from "../actions/movies";
import {connect} from "react-redux";


class Main extends Component {
  
  componentDidMount(){
    this.props.fetchMovies()
  }
 
  render() {
    return (
      <div className = "bg-dark">
        <SearchForm />
        <Movies />
        <Footer />
        
        
      </div>
    );
  }
}

const mapdispatchtoprops = (dispatch)=>{
  return {
    fetchMovies:()=>{
      dispatch(fetchMovies("superman"))
    }
  }
}
export default connect (null, mapdispatchtoprops)(Main)

