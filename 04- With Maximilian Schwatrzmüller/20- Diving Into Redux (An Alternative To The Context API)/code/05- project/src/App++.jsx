import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { putCartThunk, fetchCartThunk } from "./store/cart-slice";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

const App = () => {
  const { cartIsVisible, notification } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartThunk());
    console.log(dispatch(fetchCartThunk()));
  }, []);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(putCartThunk(cart));
    }
  }, [cart]);

  return (
    <>
      {notification && (
        <Notification notification={notification}></Notification>
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default App;
