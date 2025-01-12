import usersReducer from "../store/users.js";
import ordersReducer from "../store/orders.js";
import { callFetchUsersAction } from "../store/users.js";
import { addOrderAction } from "../store/orders.js";
import thunk from "redux-thunk";
// Thunk middleware for Redux

const store = Redux.createStore(
  Redux.combineReducers({
    users: usersReducer,
    orders: ordersReducer,
  }),
  Redux.applyMiddleware(thunk)
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
