import {
  add,
  remove,
  callFetch,
  successfulFetch,
  failedFetch,
} from "./types.js";

const addUserAction = (user) => ({ type: add, payload: user });
const removeUserAction = (_id) => ({ type: remove, payload: _id });
const callFetchUsersAction = (URL) => ({ type: callFetch, payload: URL });
const successfulFetchUsersAction = (data) => ({
  type: successfulFetch,
  payload: data,
});
const failedFetchUsersAction = (error) => ({
  type: failedFetch,
  payload: error,
});

export {
  addUserAction,
  removeUserAction,
  callFetchUsersAction,
  successfulFetchUsersAction,
  failedFetchUsersAction,
};
