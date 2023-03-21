import React from 'react'; 
import Product from './Product'; 
import './styles.css';



export default function App() { // declare the App component as the default export and exporting it 
    return (
        // render a div element
        <div> 
            {/* // render an h1 element with the title of the page */}
            <h1>My Demo Shop</h1> 
              {/* // render the Product component with props from product component  */}
            <Product title="Product 1" price="10" description="First product" /> 
            <Product title="Product 2" price={"20"} description="Second product" /> 
        </div>
    );
}
