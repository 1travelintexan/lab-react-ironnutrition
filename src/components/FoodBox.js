import React from 'react'

function FoodBox({food, onDelete}) {
if(!food){
  return <p>Loading...</p>
}
  return (
    <div>
        <div>
        <img src={food.image} alt='food' height={'100px'}/>
        <h3>Name:{food.name}</h3>
        <h5>Calories:{food.calories}</h5>
        <h5>Servings:{food.servings}</h5>
        <button onClick={()=>onDelete(food.name)}>Delete</button>
        </div>
    </div>
  )
}
export default FoodBox