import React, { useState } from "react";

// passing one plant as a prop
function PlantCard({ plant, onDeletePlant }) {
  //console.log(plant);
  //destructure out plant object
  const { id, name, image, price } = plant;
  const [inStock, setInStock] = useState(true);

  function handleStockToggle() {
    setInStock(inStock => !inStock)
  };

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })

    onDeletePlant(id);
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
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
// -I can mark a plant as "sold out".
// i need state here to control the variable of in or out of stock changing
//ADVANCED DELIVERABLE
// -As a user:
// 2. -I can delete a plant and it is still gone when I refresh the page.
