import { useHTTP } from "../hooks/useHook";
import { BASE_URL } from "../http";
import MealItem from "./MealItem";
import Error from "./Error";

const CONFIG = {};

const Meals = () => {
  const {
    isLoading,
    data: meals,
    error,
  } = useHTTP(`${BASE_URL}meals`, CONFIG, []);

  if (isLoading) return <p className="center">Fetching Meals ...</p>;
  if (error)
    return <Error title="Failed To Fetch Meals" message={error}></Error>;
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal}></MealItem>
      ))}
    </ul>
  );
};

export default Meals;
