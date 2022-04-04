import React, {useState} from 'react'


function AddFood({onAddFood}) {
  const [addFood, setAddFood] = useState({name:'', calories:0, image:'', servings:0})

  const handleAddingFood = (e) =>{
    let value = e.target.value
    setAddFood({...addFood, [e.target.name]:value})

  }

  const submitAddFood = (e) =>{
    e.preventDefault()
    onAddFood(addFood)
  }
 
  return (
    <div>
      <form onSubmit={submitAddFood}>
        <input value={addFood.name} name='name' type="text" onChange={handleAddingFood} />
        <input value={addFood.calories} name='calories' type="text" onChange={handleAddingFood} />
        <input value={addFood.image} name='image' type="text" onChange={handleAddingFood} />
        <input value={addFood.servings} name='servings' type="text" onChange={handleAddingFood} />
        <button>Add Food</button> 
      </form>
    </div>
  )
}

export default AddFood