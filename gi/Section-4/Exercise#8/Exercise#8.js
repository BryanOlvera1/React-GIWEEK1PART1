
import React from 'react';
import './styles.css';

export default function App() {

  // Declare the state variable counter using the useState hook
  // we are setting the inital value of "counter" to 0
  const [counter, setCounter] = React.useState(0);

  // This function is called when the button is clicked
  function incrementCounterHandler() {
    // Use the setCounter function to update the counter state
    // The new value of counter is the previous value (prevCounter) plus 1 whenever the onclick event that is attached to this function occurs 
    setCounter(prevCounter => prevCounter + 1);
  }
  return (
    <div>
      {/* Display the value of the counter state */}
      <p id="counter">{counter}</p>

      {/* Adding button to increment the counter state */}
      {/* When the button is clicked, call the incrementCounterHandler function */}
      <button onClick={incrementCounterHandler}>Increment</button>
    </div>
  );
}
