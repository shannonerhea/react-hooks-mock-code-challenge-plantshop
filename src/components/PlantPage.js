import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // i set state for plants
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

// fetch all plants data and set plants 
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then(plantData => {
      setPlants(plantData);
    })
  },[])

  function handleAddPlant(newPlant) {
    const updatePlantData = [...plants, newPlant];
    setPlants(updatePlantData);
  };
  //console.log({plants})
  // passing down plants onto PLantList below

const displayedPlants = plants.filter((plant) => {
  return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  //pass this down to plants list plants={displayedPlants}
});
  return (
    <main>
      <NewPlantForm addPlant={handleAddPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <PlantList plants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;
