import React, { useState } from 'react'; 

function App() { // declare the App component
  const [price, setPrice] = useState(100); // initialize a state variable called price"to 100, with a function called "setPrice" to update it

  function handleClick() { // declare a function called handleClick
    setPrice(75); // update the price state to 75 when the button is clicked
  }

  return ( // return JSX that will be rendered to the DOM
    <div> // render a div element
      <h1>My Online Shop</h1> 
      <p>Price: ${price}</p> 
      <button onClick={handleClick}>Apply Discount</button> 
    </div>
  );
}

export default App;
