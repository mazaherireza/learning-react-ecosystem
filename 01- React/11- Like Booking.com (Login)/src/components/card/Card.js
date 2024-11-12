import "./Card.css";
import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { tag } = this.props;

    return (
      <div className="card-wrapper rounded d-flex align-items-center justify-content-center">
        {tag}
      </div>
    );
  }
}
