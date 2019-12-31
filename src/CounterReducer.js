import React, { useReducer } from "react";
import countReducer from "./reducers/countReducer";
import constants from "./reducers/constants";

export default function CounterReducer() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <h2>Counter reducer: {count}</h2>
      <button onClick={() => dispatch({ type: constants.ADD_1 })}>Add 1</button>
      <button onClick={() => dispatch({ type: constants.SUBTRACT_1 })}>
        Subtract 1
      </button>
    </div>
  );
}
