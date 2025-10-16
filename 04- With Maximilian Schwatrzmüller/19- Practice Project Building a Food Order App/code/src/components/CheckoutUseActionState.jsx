import { useContext, useActionState } from "react";
import CartContext from "../store/cart/CartContext";
import ProgressContext from "../store/progress/ProgressContext";
import { Types } from "../store/progress/constants";
import { currencyFormatter } from "../utils/formatting";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Error from "./Error";
import { BASE_URL } from "../http";
import { useHTTP } from "../hooks/useHook";

const CONFIG = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const { items, clearCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(ProgressContext);

  const cartTotal = items.reduce((accumulator, item) => {
    const { quantity, price } = item;
    return accumulator + quantity * price;
  }, 0);

  const { data, error, sendRequest, clearData } = useHTTP(
    `${BASE_URL}orders`,
    CONFIG
  );

  const handleFinish = () => {
    hideCheckout();
    clearCart();
    clearData();
  };

  const handleClose = () => hideCheckout();

  const checkoutAction = async (_, formData) => {
    const data = Object.fromEntries(formData.entries());
    await sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: data,
        },
      })
    );
  };

  const [formState, formAction, pending] = useActionState(checkoutAction, null);

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (pending) actions = <span>Sending Order Data ...</span>;

  if (data && !error) {
    return (
      <Modal open={progress === Types.checkout} close={handleFinish}>
        <h2>Success</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>OK</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progress === Types.checkout} close={handleClose}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="name"></Input>
        <Input label="E-Mail Address" type="email" id="email"></Input>
        <Input label="Street" type="text" id="street"></Input>

        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code"></Input>
          <Input label="City" type="text" id="city"></Input>
        </div>

        {error && (
          <Error title="Failed To Submit Order" message={error}></Error>
        )}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
