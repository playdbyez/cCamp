//The rest parameter allows an indefinite number of arguments 
//These can be passed to a function at the same time by issuing the spread operator (...)
 
 
 //USAGE
 //Instead of one parameter, the write arrow function, sum now takes any number of arguments thanks to the rest parameter(...args)
 const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {total += args[i];}
  return total;
                                }


//The rest parameter will always return an unpacked array
 //This parameter only works as an argument to a function or an array literal
 
 
 const spreaded = ...arr
//ERROR: declaration unsucessful
