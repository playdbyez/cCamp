


// Pre-made Functions can be assigned to a new variable entirely.
const myFunc = function() {
  const myVar = "value";
  return myVar;           }



//The previous implementation is old however, the new form of declaration follows. 
const myFunc = () => {
  const myVar = "value";
  return myVar;       }


//ALTERNATIVE DECLARATION
const myFunc = () => "value";
//This code will still return the string 'value' by default without the use of Return.
