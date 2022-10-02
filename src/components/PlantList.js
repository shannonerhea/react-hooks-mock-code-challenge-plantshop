import React from "react";
import PlantCard from "./PlantCard";

// i take plants in as a prop
function PlantList({ plants }) {
  // plants.map(plant) map over each plant and return <PlantCard/> passing in plant={plant}
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plants.map((plant) => {
        return <PlantCard plant={plant} key={plant.id} />;
      })}
    </ul>
  );
}

export default PlantList;
