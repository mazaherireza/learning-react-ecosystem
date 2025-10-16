const BASE_URL = "http://localhost:3000/";

const fetchMeals = async () => {
  const response = await fetch(`${BASE_URL}meals`);
  const meals = await response.json();
  return meals;
};

export { BASE_URL, fetchMeals };
