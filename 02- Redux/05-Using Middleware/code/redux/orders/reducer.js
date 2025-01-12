import { add, remove } from "./types.js";

const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case add:
      return [...state, payload];
    case remove:
      return [...state].filter((order) => order._id != payload);
    default:
      return state;
  }
};

export default reducer;
