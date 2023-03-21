import React, { useState } from 'react';

export default function App() {

  // Declare the state variable showWarning using the useState hook
  // The initial value of showWarning is false
  const [showWarning, setShowWarning] = useState(false);
  // This function is called when the Delete button is clicked
  const handleDeleteClick = () => {
    // Use the setShowWarning function to update the showWarning state to true
    setShowWarning(true);
  };

  // This function is called when the Proceed button inside the warning message is clicked
  const handleProceedClick = () => {
    // Use the setShowWarning function to update the showWarning state to false
    setShowWarning(false);
  };

  return (
    <div>
      {/* Render the warning message if showWarning is true */}
      {showWarning ? (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          {/* Call the handleProceedClick function when the Proceed button is clicked */}
          <button onClick={handleProceedClick}>Proceed</button>
        </div>
      ) : null}

      {/* Render the button */}
      {/* Call the handleDeleteClick function when the Delete button is clicked */}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}
