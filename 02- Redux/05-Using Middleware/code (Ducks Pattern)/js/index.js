import usersReducer from "../store/users.js";
import ordersReducer from "../store/orders.js";
import logger from "../store/middlewares/logger.js";
import apiCall from "../store/middlewares/apiCall.js";
import { callFetchUsersAction } from "../store/users.js";
import { addOrderAction } from "../store/orders.js";

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
