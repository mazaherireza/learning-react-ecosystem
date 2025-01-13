import { legacy_createStore, combineReducers } from "redux";
import todosReducer from "./todos";

const store = legacy_createStore(
  combineReducers({
    todos: todosReducer,
  })
);

export default store;
