import "./header.css";
import { useCartContext } from "../../context";

const Header = () => {
  const { cart } = useCartContext();

  return (
    <div className="header-wrapper">
      <div className="container">
        <div>
          <h3>سبد خرید</h3>
          <p>{cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
