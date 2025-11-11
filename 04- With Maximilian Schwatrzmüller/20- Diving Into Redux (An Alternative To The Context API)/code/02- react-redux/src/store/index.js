import { legacy_createStore } from "redux";
import { Types } from "./constants";

const initialState = { counter: 0, showCounter: true };

const reducer = (state = initialState, action) => {
  const { type, payload = 1 } = action;
  
  switch (type) {
    case Types.inc: {
      return {
        counter: state.counter + payload,
        showCounter: state.showCounter,
      };
    }
    case Types.dec: {
      return {
        counter: state.counter - payload,
        showCounter: state.showCounter,
      };
    }
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export default store;
