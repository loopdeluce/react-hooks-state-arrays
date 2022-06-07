import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [foodFilter, setFoodFilter] = useState('All');

  const foodsToDisplay = foods.filter(food => {
    if (foodFilter === 'All') {
      return true;
    } else {
      return food.cuisine === foodFilter;
    }
  });

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodList = [...foods, newFood];
    setFoods(newFoodList);
  }

  function handleLiClick(foodId) {
    const updatedFoodList = foods.map(food => {
      if (food.id === foodId) {
        // food.heatLevel++;
        return {...food, heatLevel: food.heatLevel+1}
      } else {
        return food;
      };
    });
    setFoods(updatedFoodList);
  }

  function handleChange(event) {
    setFoodFilter(event.target.value);
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
