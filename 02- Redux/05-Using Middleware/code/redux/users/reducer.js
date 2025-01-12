import { add, remove, successfulFetch, failedFetch } from "./types.js";

const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case add: {
      return [...state, payload];
    }
    case remove: {
      return [...state].filter((user) => user._id != payload);
    }
    case successfulFetch: {
      return [...state, ...payload];
    }
    case failedFetch: {
      return [...state, { error: payload }];
    }
    default:
      return state;
  }
};

export default reducer;
