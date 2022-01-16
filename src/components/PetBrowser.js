import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  function onAdopt(event){
    onAdoptPet(event)
  }
  
  return <div className="ui cards">{pets.map(pet => 
    <Pet key={pet.id} pet={pet} onAdoptPet={onAdopt} />
  )}</div>;
}

export default PetBrowser;
