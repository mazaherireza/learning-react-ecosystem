import { useSelector } from "react-redux";
import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => {
          const { id, title, quantity, price } = item;
          return (
            <CartItem
              key={id}
              item={{ id, title, quantity, total: quantity * price, price }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
