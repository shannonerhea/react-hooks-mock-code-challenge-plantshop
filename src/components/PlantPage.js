import React, { useEffect, useState } from "react";
// add state up top
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // setting state for all the plants. form,search and list all children of 
  const [plants, setPlants] = useState([]);


//fetching every plant 
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plantsData => setPlants(plantsData)) //.then(console.log) to see data is working
  },[]);
    //console.log(plants) //show all the plants set by plantData

  function handleAddPlant(newPlant) {
    const updatedPlants = [...plants, newPlant];
    setPlants(updatedPlants);
  };

  return (
    <main>
      <NewPlantForm Addplant={ handleAddPlant }/>
      <Search />
      <PlantList plants={ plants }/>
    </main>
  );
}

export default PlantPage;
//-1.When the app starts, I can see all plants.
// plantsList is being passed the plants arr
