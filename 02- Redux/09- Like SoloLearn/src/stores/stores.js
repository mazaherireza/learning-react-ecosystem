import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courseSlice";

const store = configureStore({
  reducer: coursesReducer,
});

export default store;
