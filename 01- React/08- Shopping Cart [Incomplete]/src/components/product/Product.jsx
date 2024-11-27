import "./Product.css";
import { useState } from "react";

export default function Product(props) {
  const [counter, setCounter] = useState(0);
  const { id, img, title, price, max, add } = props;

  const handleClick = () => {
    if (counter < max) setCounter(counter + 1);
    add(id);
  };
  // Add To Cart btn is not matched with table (if user uses + or - icons in rows)
  return (
    <div className="product-wrapper">
      <img className="img" src={img} />
      <div className="product-title">{title}</div>
      <div>
        <span className="product-price">${price}</span>
        <span className="max">Max: {max}</span>
        <button
          className="btn"
          onClick={handleClick}
          disabled={counter === max}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
