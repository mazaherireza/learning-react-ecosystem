import Logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/cart/CartContext";
import ProgressContext from "../store/progress/ProgressContext";

const Header = () => {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(ProgressContext);

  const totalCartItems = items.reduce((accumulator, { quantity }) => {
    return accumulator + quantity;
  }, 0);

  const handleShowCart = () => {
    showCart();
  };

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="Logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
