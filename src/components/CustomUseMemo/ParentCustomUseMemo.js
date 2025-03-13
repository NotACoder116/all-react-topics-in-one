import React, { useState } from "react";
import CustomUseMemo from "./CustomUseMemo";

function ParentCustomUseMemo() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(10);

  const expensiveCalculation = CustomUseMemo(() => {
    console.log("Expensive calculation running...");
    return value * 2;
  }, [value]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setValue(value + 10)}>Change Value</button>
    </div>
  );
}

export default ParentCustomUseMemo;
