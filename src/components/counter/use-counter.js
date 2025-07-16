import { useState } from "react";

export const useCounter = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  const increment = () => setValue((currentValue) => Math.min(currentValue + 1, max));

  const decrement = () => setValue((prevValue) => Math.max(prevValue - 1, min));

  return {
    value,
    increment,
    decrement,
  };
};