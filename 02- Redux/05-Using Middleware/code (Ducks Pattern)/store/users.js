const add = "USER/ADD";
const remove = "USER/REMOVE";
export const callFetch = "USER/CALL_FETCH";
const successfulFetch = "USER/SUCCESSFUL_FETCH";
const failedFetch = "USER/FAILED_FETCH";

// ... export a default and declare a variable at the same time <------------ X
const reducer = (state = [], action = {}) => {
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

export const addUserAction = (user) => ({ type: add, payload: user });
export const removeUserAction = (_id) => ({ type: remove, payload: _id });
export const callFetchUsersAction = (URL) => ({
  type: callFetch,
  payload: URL,
});
export const successfulFetchUsersAction = (data) => ({
  type: successfulFetch,
  payload: data,
});
export const failedFetchUsersAction = (error) => ({
  type: failedFetch,
  payload: error,
});
