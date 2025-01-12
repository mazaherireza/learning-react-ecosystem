import { dec, reset, inc } from "./types";

const reducer = (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case dec:
      return state - 1;
    case reset:
      return 0;
    case inc:
      return state + 1;
    default:
      return state;
  }
};

export default reducer;
