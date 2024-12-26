import "./cart.css";
import List from "../List/list";
import { useCartContext } from "../../context";

const Cart = () => {
  const { clearCart, total } = useCartContext();
  return (
    <div className="cart-wrapper container">
      <List></List>
      <div className="sum">
        <h4>مجموع خرید:</h4>
        <p>{total.toLocaleString()} تومان</p>
        <button className="delete-all" onClick={() => clearCart()}>
          حذف همه آیتم‌ها
        </button>
      </div>
    </div>
  );
};

export default Cart;
