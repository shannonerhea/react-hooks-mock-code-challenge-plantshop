import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);
  const {image, name, price} = plant 

function handleStockToggle() {
  setInStock(inStock => !inStock)
};
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleStockToggle} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
