import React, { Component } from "react";
import { connect } from "react-redux";
import { crearUser } from "../actions/user";
import {Form, Button} from "react-bootstrap";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
    },
      this.handleemail = this.handleemail.bind(this);
    this.handlepassword = this.handlepassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email) {
      return this.setState({ error: "Email" });
    }
    if (!password) {
      return this.setState({ error: "Contraseña" });
    }
    this.props.crearUser(email, password);
    this.setState({ error: "" });
    return this.props.history.push("/login");
  }

  handleemail(e) {
    const email = e.target.value;
    this.setState({ email: email });
  }

  handlepassword(e) {
    const password = e.target.value;
    this.setState({ password: password });
  }

  render() {
    return (
      <div className="bg-dark" >
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="btn btn-outline my-2 my-sm-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={this.handleemail} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            
            </Form.Text>
          </Form.Group>
 
          <Form.Group controlId="formBasicPassword"  className="btn btn-outline my-2 my-sm-2">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.handlepassword} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I accept the terms and conditions" />
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const mapdispachtoprops = (dispatch) => {
  return {
    crearUser: (email, password) => dispatch(crearUser(email, password)),
  };
};

export default connect(null, mapdispachtoprops)(Register);
