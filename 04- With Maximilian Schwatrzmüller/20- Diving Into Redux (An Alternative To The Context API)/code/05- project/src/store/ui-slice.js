import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: null,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      const {
        payload: { status, title, message },
      } = action;

      state.notification = { status, title, message };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
