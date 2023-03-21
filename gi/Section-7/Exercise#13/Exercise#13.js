
import React from 'react';


export default function App() {
  
  // initializing  a function that logs a message to the console when a button is clicked
  const clickHandler = () => {
    console.log('Clicked!');
  };
  
  // Return the JSX code that will be displayed to the screen
  return (
    <div>
      <h2>You're logged in!</h2>
      <p>Welcome to your user profile!</p>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
}
