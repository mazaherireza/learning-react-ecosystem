import "./Login.css";
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Card from "../card/Card";
import Footer from "../footer/Footer";

export default class Login extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const icons = [
      <i className="fa fa-facebook"></i>,
      <i className="fa fa-google"></i>,
      <i className="fa fa-apple"></i>,
    ];
    return (
      <div className="container">
        <div className="login-wrapper">
          <p className="login-title mb-8 text-center">
            Sign in to create an acount
          </p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                autoFocus
              ></Form.Control>
            </Form.Group>

            <Button
              className="d-block w-100 my-3"
              variant="primary"
              size="lg"
              type="submit"
            >
              Continue with email
            </Button>
          </Form>
          <p className="paragraph text-center">or use one of these options</p>
          <div className="social-networks d-flex align-items-center justify-content-center">
            {icons.map((icon, index) => (
              <Card key={index} tag={icon}></Card>
            ))}
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
