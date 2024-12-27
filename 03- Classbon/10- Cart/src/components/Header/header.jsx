import "./header.css";
import { useCartContext } from "../../context";
import { convertEnNumToFa } from "../../helpers/convertEnNumToFa";

const Header = () => {
  const { cart } = useCartContext();

  return (
    <div className="header-wrapper">
      <div className="container">
        <div>
          <h3>سبد خرید</h3>
          <p>{convertEnNumToFa(cart.length)}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
