export const Counter = ( {value, increment, decrement} ) => {
  return (
    <span>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </span>
  );
};