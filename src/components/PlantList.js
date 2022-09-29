import React from "react";
import PlantCard from "./PlantCard";
//passing plants arr down as prop from plantpage
function PlantList({ plants }) {

  return (
    <ul className="cards">{plants.map(plant => {
      return <PlantCard plant={plant} key={plant.id} />;
      })}
    </ul>
  );
}

export default PlantList;
// map the arr of plants 
// pass plant prop down to PlantCard ele
