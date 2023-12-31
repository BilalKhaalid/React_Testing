import React from "react";

const useCounter = (initialCount = 0) => {
  const [count, setCount] = React.useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

export default useCounter;
