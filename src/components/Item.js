import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setIsInCart] = useState(false);

  function handleButtonClick() {
    setIsInCart((prevState) => !prevState);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleButtonClick}>{ inCart ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
