const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return [...state, payload];
    case "DEL":
      return [...state].filter((todo) => todo._id != payload);
    default:
      return state;
  }
};

const createStore = (reducer) => {
  let state;
  const dispatch = (action) => {
    state = reducer(state, action);
  };
  const getState = () => state;

  return { dispatch, getState };
};

const store = createStore(reducer);
store.dispatch({ type: "ADD", payload: "Learn Redux" });
console.log(store.getState());
