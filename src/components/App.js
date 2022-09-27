import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;

// Core Deliverables
// As a user:
// -When the app starts, I can see all plants. that was plantlist and plantcard
// -I can add a new plant to the page by submitting the form.
// -I can mark a plant as "sold out".
// -I can search for plants by their name and see a filtered list of plants.

// *ADVANCED DELIVERABLES*
//As a user:
// 1. -I can update the price of a plant and still see the updated price after
// refreshing the page.
// 2. -I can delete a plant and it is still gone when I refresh the page.
