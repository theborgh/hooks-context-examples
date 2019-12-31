import React, {useState} from 'react'
import './Counter.css'

export default function Counter() {
  const [count, setCount] = useState(0);

  const decrementToZero = count => {
    if (count > 0)
      setCount(count-1)
  }

  return (
    <div className="counter">
      <h2>The count is: {count}</h2>
      <button className="counter-button" onClick={() => setCount(count+1)}>Increment</button>
      <button className="counter-button" onClick={() => decrementToZero(count)}>Decrement</button>
    </div>
  )
}
