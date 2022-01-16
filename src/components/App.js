import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import { act } from 'react-dom/test-utils';

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(()=>{
    
      fetch(`http://localhost:3001/pets`)
      .then(r => r.json())
      .then(r => setPets(r))
   
  }, [])

  // console.log(
  //   'filters def in App', filters.type,
  //   'pets def in App:', pets,
  //   )
  
  function onChangeType(newFilter){
    // console.log("filters will be set to '",newFilter,"'")
    setFilters({ ...filters, type: `${newFilter}`})
  }

  function onFindPetsClick(){
    if (filters.type === "all"){
      fetch(`http://localhost:3001/pets`)
      .then(r => r.json())
      .then(r => setPets(r))}
    else{
      fetch(`http://localhost:3001/pets/?type=${filters.type}`)
      .then(r => r.json())
      .then(r => setPets(r))}
  }

  function onAdoptPet(id){
    setPets(pets.map(pet => {
      if(pet.id===id)
      return {...pet, isAdopted: true}
      else
      return {...pet}
    }))
    // setPets(newPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onFindPetsClick={onFindPetsClick} onChangeType={onChangeType} />
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={onAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
