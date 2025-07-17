import { DishCounter } from "./DishCounter";

export const Dish = ({dish}) => {
  return (
    <>
      {dish.name}
      <DishCounter />
    </>
  );
};