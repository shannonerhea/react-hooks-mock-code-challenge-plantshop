import React, { useState } from "react";

function NewPlantForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
// price data is a str in the obj parseFloat will make it a num
  //console.log({name, image, price})

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
