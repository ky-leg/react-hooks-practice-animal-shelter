import React from "react";

function Filters({onFindPetsClick, onChangeType}) {

  function onChange(e){
    const newFilter = e.target.value
    onChangeType(newFilter)
  }

  function onClick(){
    onFindPetsClick()
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select onChange={onChange} name="type" id="type" aria-label="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick={onClick} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
