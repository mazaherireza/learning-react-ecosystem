import { Component } from "react";
import { connect } from "react-redux";
import { Types } from "../store/constants";
import Button from "./UI/Button";
import classes from "./Counter.module.css";

class Counter extends Component {
  incHandler() {
    this.props.increment();
  }

  decHandler() {
    this.props.decrement();
  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>

        <div>
          <Button onClick={this.decHandler.bind(this)}>Decrement</Button>
          <Button onClick={this.incHandler.bind(this)}>Increment</Button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: Types.inc }),
    decrement: () => dispatch({ type: Types.dec }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
