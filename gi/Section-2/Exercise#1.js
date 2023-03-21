// initialized a transformToObjects function that takes numberArray as a parameter
function transformToObjects(numberArray) {
    // Use the map method to create a new array that applies a function to each element of the array that i will pass as an argument later on.
    var objectsArray = numberArray.map(num => {
         //the map method takes a num as an input and returns an object with a transformedArray property set to a num value.
      return {transformedArray: num}
    });
    
    // Return the resulting array of objects
    return objectsArray;
  }
  
  // Call the transformToObjects function with an array of numbers and log the resulting array of objects to the console
  console.log(transformToObjects([2, 3, 4, 5, 6]));
  