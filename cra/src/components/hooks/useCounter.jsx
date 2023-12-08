import React from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = React.useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

export default useCounter;
