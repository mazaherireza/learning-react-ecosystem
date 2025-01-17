import { types } from "./constants";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
};

export default reducer;
