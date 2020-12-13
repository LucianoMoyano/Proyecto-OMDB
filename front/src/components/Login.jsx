import React, { useContext } from "react";
import { connect } from "react-redux";
import { logginUser } from "../actions/user";
import {Form, Button} from "react-bootstrap"

class Loggin extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log("hola",this.state.email, this.state.password)
    this.props.logginUser(email, password);

    return this.props.history.push("/");
  }

  handleEmail(e) {
    console.log("hola", e.target.value)
    const email = e.target.value;
    this.setState({ email: email });
  }

  handlePassword(e) {
    const password = e.target.value;
    this.setState({ password: password });
  }
  render() {
    return (
      <div className="bg-dark" >
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="btn btn-outline my-2 my-sm-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={this.handleEmail} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            
            </Form.Text>
          </Form.Group>
 
          <Form.Group controlId="formBasicPassword"className="btn btn-outline my-2 my-sm-2">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.handlePassword} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Keep session open" />
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    logginUser: (email, password) => dispatch(logginUser(email, password)),
  };
};

export default connect(null, mapDispachToProps)(Loggin);
