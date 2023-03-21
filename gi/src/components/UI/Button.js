import React from 'react'; 
import classes from './Button.module.css'; 

const Button = (props) => { // created component called Button that takes in props as a parameter
  return (
    <button
      className={classes.button} // Set the class of the button element to the button class from the CSS module
      type={props.type || 'button'} // Set the type of the button element to the type property passed in through props, or button if no type property is provided
      onClick={props.onClick} // Set the onClick event handler of the button element to the onClick property passed in through props
    >
      {props.children} {/* displays the child components that were passed to this component */}
    </button>
  );
};

export default Button; 