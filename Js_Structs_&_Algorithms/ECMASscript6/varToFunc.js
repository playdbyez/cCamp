//WRITE ARROW FUNCTIONS


// Pre-made Functions can be assigned to a new variable entirely.
const myFunc = function() {
  const myVar = "value";
  return myVar;           }



//WRITE ARROW!
//The previous implementation is old however, the new form of declaration follows. 
const myFunc = () => {
  const myVar = "value";
  return myVar;       }


//ALTERNATIVE DECLARATION
const myFunc = () => "value";
//This code will still return the string 'value' by default without the use of Return.


//SMALLER ALT DECLARATION
//if it has only a single parameter to the function
const doubler = item => item * 2;

//if it has more than one paramenter to the function
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
