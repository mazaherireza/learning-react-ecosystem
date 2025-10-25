const redux = require("redux");

const Types = {
  increase: "INC",
  decrease: "DEC",
};

const reducer = (state = { counter: 0 }, action) => {
  const { type } = action;
  switch (type) {
    case Types.increase: {
      return {
        counter: state.counter + 1,
      };
    }
    case Types.decrease: {
      return {
        counter: state.counter - 1,
      };
    }
  }
};

const store = redux.legacy_createStore(reducer);

const subscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(subscriber);
store.dispatch({ type: Types.increase });
