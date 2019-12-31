import React from 'react'
import useToggle from './hooks/useToggle';
import './Toggler.css';

export default function Toggler() {
  const [enabled, toggleEnabled] = useToggle(true);

  return (
    <div className="toggler">
      <h2>The button is: {enabled ? "enabled" : "disabled"}</h2>
      <button className="toggler-button" disabled={!enabled}>This is a button</button>
      <button className="toggler-button" onClick={toggleEnabled}>Toggle</button>
    </div>
  )
}
