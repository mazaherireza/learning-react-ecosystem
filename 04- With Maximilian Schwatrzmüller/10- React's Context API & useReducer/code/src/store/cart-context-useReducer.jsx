import { createContext, useReducer } from "react";
import { types, reducer } from "./reducer";

export const CartContext = createContext();

const initialState = {
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddItemToCart = (id) => {
    dispatch({
      type: types.ADD_ITEM,
      payload: id,
    });
  };

  const handleUpdateCartItemQuantity = (productId, amount) => {
    dispatch({
      type: types.UPDATE_QUANTITY,
      payload: {
        productId,
        amount,
      },
    });
  };

  const contextValue = {
    items: state.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
