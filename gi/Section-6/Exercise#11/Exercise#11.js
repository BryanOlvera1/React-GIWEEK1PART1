import React, { useState } from 'react';

export default function App() {

  // the starting value of isRed is false
  const [isRed, setIsRed] = useState(false);

  // This function is called when the toggle style button is clicked
  const toggleStyle = () => {
    setIsRed(prevIsRed => !prevIsRed);
  };

  
  return (
    <div>
      {/* The color of the text is set based on the value of isRed */}
      <p style={{ color: isRed ? 'red' : 'white' }}>Style me!</p>

      {/* Call the toggleStyle function when the button is clicked */}
      <button onClick={toggleStyle}>Toggle style</button>
    </div>
  );
}

