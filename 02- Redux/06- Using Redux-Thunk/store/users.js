const add = "USER/ADD";
const remove = "USER/REMOVE";
export const callFetch = "USER/CALL_FETCH";
const successfulFetch = "USER/SUCCESSFUL_FETCH";
const failedFetch = "USER/FAILED_FETCH";

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
export const callFetchUsersAction = (URL) => {
  return (dispatch) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => dispatch(successfulFetchUsersAction(data)))
      .catch((error) => dispatch(failedFetchUsersAction(error)));
  };
};
export const successfulFetchUsersAction = (data) => ({
  type: successfulFetch,
  payload: data,
});
export const failedFetchUsersAction = (error) => ({
  type: failedFetch,
  payload: error,
});
