import { currencyFormatter } from "../utils/formatting";

const CartItem = ({ item, onInc, onDec }) => {
  const { name, quantity, price } = item;

  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDec}>-</button>
        <span>{quantity}</span>
        <button onClick={onInc}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
