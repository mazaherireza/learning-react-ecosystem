const reducer = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case "ADD": {
      const { todo } = action;
      return [...state, todo];
    }
    case "DEL": {
      const { _id } = action;
      return [...state].filter((todo) => todo._id != _id);
    }
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
store.dispatch({ type: "ADD", todo: { title: "Learn Redux" } });
