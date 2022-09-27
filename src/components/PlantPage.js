import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

// fetch the pants and put them in the plants arr
  useEffect(() => {
    fetch(" http://localhost:6001/plants")
    .then((r) => r.json())
    .then(plantsArr => {
      setPlants(plantsArr)
    })        //.then(console.log)to see i get data from API
  },[]);
   //console.log(plants); // to ck if plants are in plantsArr in state
   // passing plants to PlantList compoment to map over and render each card 

   function handleAddPlant(newPlant) {
    const updatedPlantsArr = [...plants, newPlant ];
    setPlants(updatedPlantsArr);
   };

   function handleDeletePlant(id) {
    const updatedPlantsArr = plants.filter(plant => plant.id !== id);
    setPlants(updatedPlantsArr);
   };

   const displayPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
   });


  return (
    <main>
      <NewPlantForm onAddPlant={ handleAddPlant }/>
      <Search searchTerm={ searchTerm } onSearchChange={ setSearchTerm }/>
      <PlantList plants={ displayPlants } onDeletePlant={ handleDeletePlant }/>
    </main>
  );
}

export default PlantPage;
