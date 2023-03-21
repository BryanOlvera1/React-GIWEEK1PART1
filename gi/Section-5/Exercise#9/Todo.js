import React from 'react';
//exporting the Todo component with props as a param and it will return a list item linked to those propeties 
export default function Todo(props) {
  return <li>{props.text}</li>;
}