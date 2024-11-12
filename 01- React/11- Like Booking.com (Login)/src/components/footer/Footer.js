import "./Footer.css";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer className="footer-wrapper">
          <p className="mb-2 text-center">
            By signing in or creating an account, you agree with our{" "}
            <a href="#">Terms & conditions</a> and{" "}
            <a href="#">Privacy statement</a>
          </p>

          <p className="mb-1 text-center">All rights reserved.</p>

          <p className="text-center">Copyright (2006 - 2024) - Booking.com</p>
        </footer>
      </div>
    );
  }
}
