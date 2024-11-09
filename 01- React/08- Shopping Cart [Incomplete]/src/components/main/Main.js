import "./Main.css";
import { useState } from "react";
import Product from "../product/Product";
import Row from "../row/Row";
import Creme from "./images/Creme_75ml.webp";
import BodyLotion from "./images/Body_Lotion.webp";

const products = [
  {
    id: "PRT_1001",
    title: "Creme 75ml",
    img: Creme,
    price: 4,
    max: 2,
  },
  {
    id: "PRT_1002",
    title: "Body Lotion",
    img: BodyLotion,
    price: 14,
    max: 4,
  },
];

export default function Main() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const index = cart.findIndex((product) => product.id === productId);
    if (index >= 0) {
      setCart(
        cart.map((product) => {
          if (product.id === productId) {
            let { quantity: q } = product;
            // Create a new object
            return {
              ...product,
              quantity: ++q,
            };
          } else {
            // No Changes
            return product;
          }
        })
      );
    } else {
      const selectedProduct = products.find(
        (product) => product.id === productId
      );
      setCart([...cart, { ...selectedProduct, quantity: 1 }]);
    }
  };

  const handleDec = (productId) => {
    let { quantity: q } = cart.find((product) => product.id === productId);
    if (q === 1) {
      setCart(cart.filter((product) => product.id !== productId));
    } else {
      setCart(
        cart.map((product) => {
          if (product.id === productId) {
            let { quantity: q } = product;
            return {
              ...product,
              quantity: --q,
            };
          } else {
            return product;
          }
        })
      );
    }
  };

  const handleDelete = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const handleInc = (productId) => {
    setCart(
      cart.map((product) => {
        if (product.id === productId) {
          let { quantity: q, max: m } = product;
          if (q < m) {
            return {
              ...product,
              quantity: ++q,
            };
          } else {
            return product;
          }
        }
      })
    );
  };

  return (
    <div className="container">
      <div className="main-container-products">
        {products.map((product, index) => (
          <Product key={index} {...product} add={addToCart}></Product>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="main-container-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((product) => (
                <Row
                  key={product.id}
                  {...product}
                  dec={() => handleDec(product.id)}
                  del={() => handleDelete(product.id)}
                  inc={() => handleInc(product.id)}
                ></Row>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
