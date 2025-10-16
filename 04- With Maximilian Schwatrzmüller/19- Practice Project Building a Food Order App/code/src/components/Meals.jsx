import { useState, useEffect } from "react";
import { fetchMeals } from "../http";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      const loadedMeals = await fetchMeals();
      setMeals(loadedMeals);
    };
    loadMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal}></MealItem>
      ))}
    </ul>
  );
};

export default Meals;
