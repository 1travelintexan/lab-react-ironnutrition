import React, {useState} from 'react'

function Search({searchFood, setSearchFood}) {
    function handleSearch(e){
setSearchFood(e.target.value)
    }

  return (
    <div>
    <input value={searchFood} placeholder='Search a Food' onChange={handleSearch}/>
    </div>
  )
}

export default Search