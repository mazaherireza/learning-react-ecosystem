import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0 };
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
