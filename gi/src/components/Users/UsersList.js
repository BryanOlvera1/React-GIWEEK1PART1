
import React from 'react';
import Card from '../UI/Card'; 
import classes from './UsersList.module.css'; 

const UsersList = (props) => { // new component called UsersList that takes in props as a parameter
  return (
    <Card className={classes.users}> {/* Card component with a className of users */}
      <ul> 
        {props.users.map((user) => ( 
          <li key={user.id}>{user.name} ({user.age} years old)</li> 
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;