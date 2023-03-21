import React from 'react'; 

export default function Product(props) { // declare the Product component as the default export, taking in props as a parameter
    return (
        // render an article element with the class "product"
        <article className="product"> 
 {/*render an h2 element with the title prop passed down from the parent component */}
            <h2>{props.title}</h2> 
            <p className="price">${props.price}</p> 
            {/* render a p element with the description prop passed down from the parent component */}
            <p>{props.description}</p> 
        </article>
    );
}

