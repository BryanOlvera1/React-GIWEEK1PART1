import React, { useState } from 'react'; 
import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card'; 
import Button from '../UI/Button'; 
import classes from './AddUser.module.css'; 

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState(''); 
  const [enteredAge, setEnteredAge] = useState(''); // define state for entered age
  const [error, setError] = useState(); // define state for error message

  const addUserHandler = (event) => { // define event handler for add user button
    event.preventDefault(); // prevent default form submission behavior which would reload the page 
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) { // check if input fields are empty
      setError({ // set error state with message and title
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return; 
    }
    if (+enteredAge < 1) { // check if age is less than 1
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return; 
    }
    props.onAddUser(enteredUsername, enteredAge); 
    setEnteredUsername('');
    setEnteredAge(''); 
  };

  const usernameChangeHandler = (event) => { 
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => { 
    setEnteredAge(event.target.value); 
  };

  const errorHandler = () => { 
    setError(null);
  };

  return (
    <div>
      {error && ( 
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>   
          <label htmlFor="username">Username</label> 
          <input
            id="username"
            type="text"
            value={enteredUsername} 
            onChange={usernameChangeHandler} 
          />
          <label htmlFor="age">Age (Years)</label> 
          <input
            id="age"
            type="number"
            value={enteredAge} 
            onChange={ageChangeHandler}
          />
          <Button type="submit">Submit Your Info</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser; 
