import Header from "./components/Header";
import Meals from "./components/Meals++";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout++";
import { ProgressProvider } from "./store/progress/ProgressContext";
import { CartProvider } from "./store/cart/CartContext";

const App = () => {
  return (
    <>
      <ProgressProvider>
        <CartProvider>
          <Header></Header>
          <Meals></Meals>
          <Cart></Cart>
          <Checkout></Checkout>
        </CartProvider>
      </ProgressProvider>
    </>
  );
};

export default App;
