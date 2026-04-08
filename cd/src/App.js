import React, { useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startIncrement = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const startDecrement = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startIncrement}>Auto Increment</button>
      <button onClick={startDecrement}>Auto Decrement</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}

