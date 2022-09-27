import React from "react";
import PlantCard from "./PlantCard";


// passing prop of plants from plant pg to have cards show up 
// mapping over then to render each card individually
// inside PlantCard pass down plants var to access data for card img name price
function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => {
      return <PlantCard key={plant.id} plant={plant} />;
    })}
    </ul>
  );
}

export default PlantList;
