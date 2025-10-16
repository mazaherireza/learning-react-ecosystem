import { createContext, useState } from "react";
import { Types } from "./constants";

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState("");

  const showCart = () => setProgress(Types.cart);
  const hideCart = () => setProgress("");

  const showCheckout = () => setProgress(Types.checkout);
  const hideCheckout = () => setProgress("");

  const value = {
    progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContext;
