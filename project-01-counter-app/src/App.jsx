import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControl from "./CounterControl";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="bg-gray-500 flex justify-center items-center min-h-screen">
      <div>
        <CounterDisplay count={count} />
        <CounterControl
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
