import { createContext, useReducer } from "react";
import { cartReducer } from "./reducer";
import { Types } from "./constants";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatch({ type: Types.add, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: Types.remove, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: Types.clear });
  };

  const value = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
