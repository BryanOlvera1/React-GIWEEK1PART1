import React from 'react';
// creating a new component called App
function App() {
    //returning a div with an h1 and p tag that will be displayed once this function is called in another file using JSX
    return (
        <div>
        <h1>Exercise done!</h1>
            <p>Practicing React...</p>
        </div>
    );
}
 //allowing this function/component to be used in other files 
export default App