import { Counter } from "../../counter/Counter";
import { useCounter } from "../../counter/use-counter";

export const DishCounter = () => {
  const { value, increment, decrement } = useCounter({ max: 5, min: 0 });

  return <Counter value={value} increment={increment} decrement={decrement} />;
};