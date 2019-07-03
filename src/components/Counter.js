import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={e => setCount(count + 1)} data-testid="button-count">
        Click to increase: {count}
      </button>
    </div>
  );
};
