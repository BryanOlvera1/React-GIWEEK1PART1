import React from 'react'; 

import classes from './Card.module.css';

const Card = (props) => { // Define a new component called Card
  return (
    <div className={`${classes.card} ${props.className}`}>
      {props.children} {/* displays the child components that were passed to this component */}
    </div>
  );
};

export default Card; 