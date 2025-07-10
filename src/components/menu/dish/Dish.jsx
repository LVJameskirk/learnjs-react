import { Counter } from "../../counter/Counter";

export const Dish = ({dish}) => {
  return (
    <>
      {dish.name}
      <Counter />
    </>
  );
};