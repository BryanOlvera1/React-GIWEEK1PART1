import React from 'react'; 

import './styles.css'; 

export default function App() { 
    // declare a function called handleBookmarkClick that logs "Stored!" to the console when called
    function handleBookmarkClick() { 
        console.log("Stored!");
    };
 // return a button element with the text Bookmark and an onClick event that calls the handleBookmarkClick function when clicked
    return <button onClick={handleBookmarkClick}>Bookmark</button>; 
}
