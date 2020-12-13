import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logginUser, loggoutUser} from "../actions/user"

const mapstatetoprops = (state) => {
  return {
    Autenticado: state.loginReducers.user.isAutenticated,
  };
};

const mapdispatchtoprops = (dispatch) => {
  return{
      loggoutUser: ()=>{
        dispatch (loggoutUser())
      }
  }
}


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = ""

    this.handleSubmit=this.handleSubmit.bind(this)
  }
        handleSubmit(){
          console.log("cliquie")
         this.props.loggoutUser()
        }

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <div>
            <div className="navbar-header">
              <Link
                className="navbar-brand text-yellow text-lg brand-text"
                to="/"
              >
                OMDB
              </Link>

              <Link
                className="navbar-brand text-yellow text-lg brand-text"
                to="/"
              >
                Favoritos
              </Link>

              {this.props.Autenticado ? (
                <span>
                <Link
                  className="navbar-brand text-yellow text-lg brand-text"
                  to="/"
                >
                  Cuenta
                </Link>
                
                <span>
 
                <Link onClick={this.handleSubmit}
                className="navbar-brand text-yellow text-lg brand-text"
                to="/login"
              >
                Salir
              </Link>
                </span>

                </span>
              ) : (
                <span>
                  <Link
                    className="navbar-brand text-yellow text-lg brand-text"
                    to="/Login"
                  >
                    Login
                  </Link>

                  <Link
                    className="navbar-brand text-yellow text-lg brand-text"
                    to="/Register"
                  >
                    Sing up
                  </Link>
                </span>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(mapstatetoprops, mapdispatchtoprops)(Navbar);
