import { Types } from "./constants";

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.add: {
      const copy = structuredClone(state.items);
      const index = state.items.findIndex((item) => item.id === payload.id);
      if (index >= 0) {
        copy[index] = { ...copy[index], quantity: copy[index].quantity + 1 };
      } else {
        copy.push({ ...payload, quantity: 1 });
      }
      return { ...state, items: [...copy] };
    }

    case Types.remove: {
      const index = state.items.findIndex((item) => item.id === payload);
      const selectedItem = state.items[index];
      const copy = structuredClone(state.items);
      if (selectedItem.quantity === 1) {
        copy.splice(index, 1);
      } else {
        copy[index].quantity = selectedItem.quantity - 1;
      }
      return { ...state, items: [...copy] };
    }

    case Types.clear: {
      return { ...state, items: [] };
    }

    default:
      return state;
  }
};
