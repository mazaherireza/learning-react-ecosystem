import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

const URL = "FIREBASE_URL";
let isInitial = true;

const App = () => {
  const { cartIsVisible, notification } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending Cart Data",
      })
    );

    fetch(`${URL}/cart.json`, {
      method: "PUT",
      body: JSON.stringify(cart),
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
  }, [cart]);

  return (
    <>
      {notification && (
        <Notification notification={notification}></Notification>
      )}
      <Layout>
        {cartIsVisible && <Cart></Cart>}
        <Products />
      </Layout>
    </>
  );
};

export default App;
