import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/products/1265">Product 1</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
