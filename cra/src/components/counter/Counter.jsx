import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <button onClick={() => setCount(amount)}>Set</button>
      </div>
    </div>
  );
};

export default Counter;
