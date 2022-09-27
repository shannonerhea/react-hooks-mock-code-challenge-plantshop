import React, { useState } from "react";

function NewPlantForm() {
  const [name, setName] = useState(""); // add value to input field in jsx
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
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
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
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
