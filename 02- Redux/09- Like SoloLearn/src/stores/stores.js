import { combineReducers, configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses";

const store = configureStore({
  reducer: combineReducers({
    courses: coursesReducer,
  }),
});

export default store;
