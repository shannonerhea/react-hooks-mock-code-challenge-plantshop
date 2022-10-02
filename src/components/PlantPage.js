import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // i set state for plants
  const [plants, setPlants] = useState([]);
// fetch all plants data and set plants 
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then(plantData => {
      setPlants(plantData);
    })
  },[])
  //console.log({plants})
  // passing down plants onto PLantList below
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
