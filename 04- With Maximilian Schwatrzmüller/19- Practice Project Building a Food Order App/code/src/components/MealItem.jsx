import { useContext } from "react";
import CartContext from "../store/cart/CartContext";
import { BASE_URL } from "../http";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";

const MealItem = ({ meal }) => {
  const { name, price, description, image } = meal;
  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    addItem(meal);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`${BASE_URL}${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddToCart}>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
