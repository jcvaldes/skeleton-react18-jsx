import React from "react";

import useCounter from "../hooks/useCounter";

const CounterTwo = () => {
  const { counter, increment, reset, decrement } = useCounter(0);

  return (
    <div className="counter">
      <h1 className="counter__title">{counter}</h1>

      <div className="counter__content">
        <button className="counter__button" onClick={() => increment()}>
          +1
        </button>

        <button className="counter__button" onClick={reset}>
          Reset
        </button>

        <button className="counter__button" onClick={() => decrement()}>
          -1
        </button>
      </div>
    </div>
  );
};

export default CounterTwo;
