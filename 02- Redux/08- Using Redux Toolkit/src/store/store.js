import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";

const store = configureStore({
  reducer: todosReducer,
});

export default store;
