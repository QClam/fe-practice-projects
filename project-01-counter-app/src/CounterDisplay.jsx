import React from "react";

function CounterDisplay({ count }) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-white">Bộ đếm: {count}</h1>
    </div>
  );
}

export default CounterDisplay;
