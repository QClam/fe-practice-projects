import React from "react";

function CounterControl({onIncrease, onDecrease, onReset}) {
  return (
    <div className="flex flex-row gap-1 p-4">
      <button className="border rounded bg-amber-600 p-2 font-bold hover:scale-110 transition" onClick={onDecrease}>
        -
      </button>
      <button className="border rounded bg-blue-400 p-2 font-bold hover:scale-110 transition" onClick={onIncrease}>
        +
      </button>
      <button className="border rounded bg-amber-200 p-2 font-bold hover:scale-110 transition" onClick={onReset}>
        Đặt lại
      </button>
    </div>
  );
}

export default CounterControl;
