import React from 'react'; 
export default function App() { 
    const [isActive, setIsActive] = React.useState(false); // Using the useState hook to create a state variable called isActive and a function to update it called setIsActive. The initial value of isActive is set to false.

    function toggleClass() { 
        setIsActive(!isActive); // Calling setIsActive to update the value of isActive
    };

    return (
        <div>
            <p className={isActive ? 'active' : ''}>Style me!</p> {/* A tag with a className of active if isActive is true */}
            <button onClick={toggleClass}>Toggle style</button> {/* onClick event that calls toggleClass when clicked */}
        </div>
    );
}

