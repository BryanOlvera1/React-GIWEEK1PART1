import React from 'react';
import Card from './Card'; 
import Button from './Button'; 
import classes from './ErrorModal.module.css'; 
// wrapped in the card component. 
const ErrorModal = (props) => { 
    // Defining component called ErrorModal that takes in props as a parameter
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} /> 
      {/* div with an onClick event handler that calls the onConfirm function passed in through props */}
      <Card className={classes.modal}> 
        <header className={classes.header}>
          <h2>{props.title}</h2> {/* title passed in through props */}
        </header>
        <div className={classes.content}>
          <p>{props.message}</p> {/* message passed in props */}
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button> {/* Button component with the onConfirm event handler passed in through props */}
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal; 