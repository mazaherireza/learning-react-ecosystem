import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    setCart(state, action) {
      const {
        payload: { items, totalQuantity },
      } = action;

      state.items = items;
      state.totalQuantity = totalQuantity;
    },
    addItem(state, action) {
      const { payload } = action;

      const item = state.items.find((item) => item.id === payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }

      state.totalQuantity++;
      state.changed = true;
    },
    removeItem(state, action) {
      const { payload } = action;

      const item = state.items.find((item) => item.id === payload);
      
      if (item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== payload);
      } else {
        item.quantity--;
      }

      state.totalQuantity--;
      state.changed = true;
    },
  },
});

const URL = "FIREBASE_URL";

export const putCartThunk = (cart) => (dispatch) => {
  dispatch(
    uiActions.showNotification({
      status: "pending",
      title: "Sending",
      message: "Sending Cart Data",
    })
  );

  fetch(`${URL}/cart.json`, {
    method: "PUT",
    body: JSON.stringify({
      items: cart.items || [],
      totalQuantity: cart.totalQuantity,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Sending Cart Data Failed.");
      }
      return response.json();
    })
    .then((data) => {
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent Cart Data Successfully",
        })
      );
      console.log(data);

      dispatch(cartSlice.actions.setCart(data));
    })
    .catch((error) => {
      console.log(error);

      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending Cart Data Failed",
        })
      );
    });
};

export const fetchCartThunk = () => (dispatch) => {
  fetch(`${URL}/cart.json`)
    .then((response) => {
      if (!response.ok) throw new Error("Could Not Fetch Cart Data");
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching Cart Data Failed",
        })
      );
      console.error(error);
    });
};

export const cartActions = cartSlice.actions;
export default cartSlice;
