import React, { useState } from "react";

function PlantCard({ plant }) {
  //console.log(plant)
  const { image, name, price } = plant;
  const [inStock, setInStock] = useState("false")

  function toggleStock() {
    setInStock((inStock) => !inStock)
  }


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={toggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
