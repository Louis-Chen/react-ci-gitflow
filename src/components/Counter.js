import React from "react";

export const Counter = ({ number }) => {
  let count = number + 20;

  return <p data-testid="number">Number :{count}</p>;
};

Counter.defaultValue = {
  number: 0
};
