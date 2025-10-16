import { useContext } from "react";
import CartContext from "../store/cart/CartContext";
import ProgressContext from "../store/progress/ProgressContext";
import { Types } from "../store/progress/constants";
import { currencyFormatter } from "../utils/formatting";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartItem from "./CartItem";

const Cart = () => {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(ProgressContext);

  const cartTotal = items.reduce((accumulator, item) => {
    const { quantity, price } = item;
    return accumulator + quantity * price;
  }, 0);

  const handleCloseCart = () => {
    hideCart();
  };

  const handleGoToCheckout = () => {
    showCheckout();
  };

  return (
    <Modal
      className="cart"
      open={progress === Types.cart}
      close={progress === Types.cart ? handleCloseCart : null}
    >
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onInc={() => addItem(item)}
            onDec={() => removeItem(item.id)}
          ></CartItem>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go To Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
