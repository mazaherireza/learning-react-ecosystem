import { callFetch } from "../users/types.js";
import {
  successfulFetchUsersAction,
  failedFetchUsersAction,
} from "../users/creators.js";

const apiCall =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const { type, payload } = action;
    if (type != callFetch) next(action);
    else fetch(payload)
      .then((response) => response.json())
      .then((data) => dispatch(successfulFetchUsersAction(data)))
      .catch((error) => dispatch(failedFetchUsersAction(error)));
  };

export default apiCall;
