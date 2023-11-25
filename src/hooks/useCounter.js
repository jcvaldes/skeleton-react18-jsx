import { useState } from "react";

const useCounter = (count = 0) => {
  const [counter, setCounter] = useState(count);

  const increment = (factor = 1) => {
    setCounter(counter + factor);
  };

  const reset = () => {
    setCounter(count);
  };

  const decrement = (factor = 1, limit = 0) => {
    if (counter > limit) {
      setCounter(counter - factor);
    }
  };

  return {
    counter,
    increment,
    reset,
    decrement
  };
};

export default useCounter;
