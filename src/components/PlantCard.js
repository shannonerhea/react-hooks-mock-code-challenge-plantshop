import React from "react";
// use plant prop that i passed to PLantCard ele in plantList
function PlantCard({ plant }) {
  const { id, name, image, price } = plant
  return (
    <li className="card">
      <img src={ image } alt={ name } />
      <h4>{ name }</h4>
      <p>Price: { price }</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
