import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import ErrorPage from "./ErrorPage";
const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Loading meals...</p>;
  }

  if (error) {
    return (
      <ErrorPage title="Failed to fetch meals" message={error}></ErrorPage>
    );
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
