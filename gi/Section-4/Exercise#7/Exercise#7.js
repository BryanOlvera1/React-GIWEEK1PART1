import React, { useState } from 'react'; 
import './styles.css'; 


export default function App() { // declare the App component as the default export
  const [message, setMessage] = useState(''); // initialize a state variable called "message" to an empty string, with a function called "setMessage" to update it
  const [isValid, setIsValid] = useState(false); // initialize a state variable called "isValid" to false, with a function called "setIsValid" to update it

  const handleMessageChange = (event) => { 
    const value = event.target.value; 
    setMessage(value); // update the "message" state to the retrieved value

    if (value.trim().length < 3) { // if the trimmed value is less than 3 characters long
      setIsValid(false); // update the isValid state to false
    } else { // otherwise
      setIsValid(true); // update the isValid state to true
    }
  };

  return (
    <form> 
      <label>Your message</label> 
      <input type="text" value={message} onChange={handleMessageChange} /> 
      {isValid ? <p>Valid message</p> : <p>Invalid message</p>} 
    </form>
  );
}
