import React from "react";

const Controls = ({ step, onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onDecrement}>
      Reduce by {step}
    </button>
    <button type="button" onClick={onIncrement}>
      Increase by {step}
    </button>
  </div>
);

export default Controls;
