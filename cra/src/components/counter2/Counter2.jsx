import React from "react";

const Counter2 = ({count,handleIncrement,handleDecrement}) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleIncrement && (
        <button onClick={handleIncrement}>Increment</button>
      )}
      {handleDecrement && (
        <button onClick={handleDecrement}>Decrement</button>
      )}
    </div>  
  );
};

export default Counter2;
