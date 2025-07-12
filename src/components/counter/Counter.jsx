import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState(0);
  
  const increment = () => value < 5 && value >= 0 ? setValue(value + 1) : value;
  const decrement = () => value <= 5 && value > 0 ? setValue(value - 1) : value;

  return (
    <span>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </span>
  );
};