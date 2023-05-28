//The rest parameter allows an indefinite number of arguments to be passed to a function at the same time.
(...)
 
 
 //USAGE
 //Instead of one parameter, the write arrow function, sum now takes any number of arguments thanks to the rest parameter(...args)
 const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {total += args[i];}
  return total;
                                }



