import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  // Define state for users list
  const [usersList, setUsersList] = useState([]);

  // Define a function to add a new user to the list
  function addUserHandler(uName, uAge){
    // Use the setUsersList function to update the state with the new user
    setUsersList((prevUsersList) => {
      // Use the spread operator to copy the previous state, and add the new user to it
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      {/*  passing the addUserHandler function as a prop */}
      <AddUser onAddUser={addUserHandler} />
      {/*  passing the usersList state as a prop */}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
