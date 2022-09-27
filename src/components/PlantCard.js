import React, { useState } from "react";

// passing one plant as a prop
function PlantCard({ plant }) {
  //console.log(plant);
  //destructure out plant object
  const { name, image, price } = plant;
  const [inStock, setInStock] = useState(true);

  function handleStockToggle() {
    setInStock(inStock => !inStock)
  };

  return (
    <li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      { inStock ? (
        <button className="primary" onClick={handleStockToggle}>In Stock</button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
// -I can mark a plant as "sold out".
// i need state here to control the variable of in or out of stock changing
