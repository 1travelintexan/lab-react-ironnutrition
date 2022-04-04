import foods from './foods.json';
import './App.css';
import {useState} from 'react'
import Foodbox from './components/FoodBox.js'
import AddFood from './components/AddFood.js'
import Search from './components/Search.js'

function App() {
  const [foodState, setFoodState] = useState(foods)
  const [searchFood, setSearchFood] = useState('')

  const handleAddFood = (addFood) => {
   setFoodState([addFood,...foodState])
  }

  const handleDelete = (food) =>{
    let newFoods = foodState.filter((elem)=>{
      return elem.name != food
    })
    setFoodState(newFoods)
  }

  return (
    <div className="App">
    <Search searchFood={searchFood} setSearchFood={setSearchFood}/>
      <AddFood onAddFood={handleAddFood}/>
      {foodState.filter((elem)=>{
        return elem.name.toLowerCase().includes(searchFood.toLowerCase())
      })
        .map((elem, i)=>{
        return (
          <div key={elem + i}>
          <Foodbox food={elem} onDelete={handleDelete}/>
          </div>
        )
      })}
      
    </div>
  );
}

export default App;
