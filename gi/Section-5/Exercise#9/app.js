
import React from 'react';
import Todo from './Todo'; 

// Define a constant array of dummy todos
const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

// Define the App component
export default function App() {
  return (
    <ul>
      {/* Map over the dummy todos and render a Todo component for each one */}
      {/* The key prop is set to the todo text, and the tex prop is set to the todo text as well */}
      {DUMMY_TODOS.map((todoText) => (
        <Todo key={todoText} text={todoText} />
      ))}
    </ul>
  );
}
