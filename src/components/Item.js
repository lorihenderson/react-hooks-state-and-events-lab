import React, { useState } from "react";

function Item({ name, category }) {
  const [itemToCart, setItemToCart] = useState(false)

  function handleAdd() {
    setItemToCart(!itemToCart)
  }

  return (
    <li className={itemToCart === false ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAdd}
             className="add" >{itemToCart === false ? "Add to Cart" : "Remove from Cart"}
      </button>
    </li>
  );
}

export default Item;
