import React from "react";
import PlantCard from "./PlantCard";


// passing prop of plants from plant pg to have cards show up 
// mapping over then to render each card individually
function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => {
      return <PlantCard />;
    })}
    </ul>
  );
}

export default PlantList;
