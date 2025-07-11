import { useState } from "react";
import { Restaurant } from "../restaurant/Restaurant";
import { Tab } from "../tab/Tab";

export const RestaurantsPage = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(({ id }) => id === activeRestaurantId);

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }

    setActiveRestaurantId(id);
  }

  return (
    <div>
      <nav>
        {restaurants.map(({ id, name}) => (
        <Tab
          key={id}
          title={name}
          onClick={() => handleSetActiveRestaurantId(id)}
          isActive={id === activeRestaurantId}
        />
      ))}
      </nav>

      <Restaurant 
        name={activeRestaurant.name}
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
    </div>
  );
};