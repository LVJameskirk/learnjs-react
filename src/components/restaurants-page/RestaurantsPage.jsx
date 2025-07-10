import { Restaurant } from "../restaurant/Restaurant";

export const RestaurantsPage = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant}/>
      ))}
    </div>
  );
};