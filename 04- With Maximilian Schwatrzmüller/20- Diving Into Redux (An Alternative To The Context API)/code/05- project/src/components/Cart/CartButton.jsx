import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "@/store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
