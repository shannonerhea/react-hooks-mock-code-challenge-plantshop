import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState(""); // add value to input field in jsx and onChange={}
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  //console.log({name})
  function handleSubmit(e) {
    e.preventDefault()
    //add POST request to form
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify({
        name: name,
        image: image,
        price: price,

    })
  })
  .then((r) => r.json())
  .then(newPlant => onAddPlant(newPlant));
  // add new plant to my page
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
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
//parseFloat makes the str a decimal num
// make a controlled form by connecting each input to a state variable
// request to the backend to post on form 
// #### POST `/plants`

// Required Headers:

// ```js
// {
//   "Content-Type": "application/json"
// }
// ```

// Request Object:

// ```json
// {
//   "name": "string",
//   "image": "string",
//   "price": number
// }
// ```

// Example Response:

// ```json
// {
//   "id": 1,
//   "name": "Aloe",
//   "image": "./images/aloe.jpg",
//   "price": 15.99
// }
// ```
