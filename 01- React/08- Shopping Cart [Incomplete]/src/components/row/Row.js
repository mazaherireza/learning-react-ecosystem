import "./Row.css";
import { useState } from "react";

export default function Table(props) {
  const { id, title, price, max, quantity, dec, del, inc } = props;

  const calculateTotal = () => {
    return quantity * price;
  };

  const handleDec = () => {
    dec(id);
    //calculateTotal();
  };

  const handleInc = () => {
    inc(id);
  };

  return (
    <tr className="row-container">
      <td>{title}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>${calculateTotal()}</td>
      <td className="actions">
        {quantity >= 1 && (
          <span>
            <i className="fa fa-minus" onClick={handleDec}></i>
          </span>
        )}
        <span>
          <i className="fa fa-trash" onClick={() => del(id)}></i>
        </span>
        {quantity < max && (
          <span>
            <i className="fa fa-plus" onClick={handleInc}></i>
          </span>
        )}
      </td>
    </tr>
  );
}
