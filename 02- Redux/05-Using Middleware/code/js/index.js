import usersReducer from "../redux/users/reducer.js";
import ordersReducer from "../redux/orders/reducer.js";
import logger from "../redux/middlewares/logger.js";
import apiCall from "../redux/middlewares/apiCall.js";
import { callFetchUsersAction } from "../redux/users/creators.js";
import { addOrderAction } from "../redux/orders/creators.js";

const store = Redux.createStore(
  Redux.combineReducers({
    users: usersReducer,
    orders: ordersReducer,
  }),
  Redux.applyMiddleware(logger(1001), apiCall)
);

store.subscribe(() => {
  console.log("Subscribe");
  console.log(store.getState());
});

store.dispatch(
  addOrderAction({
    orderID: "ORD_1001",
    category: "book",
    details: {
      title: "خانه‌ی ادریسی‌ها",
      author: "غزاله علیزاده",
      price: 28,
      amount: 1,
    },
  })
);

store.dispatch(callFetchUsersAction("https://fakestoreapi.com/users"));
