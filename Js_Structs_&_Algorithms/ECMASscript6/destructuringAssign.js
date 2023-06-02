//This assignment makes the declaration parameter calls much easier 
//By grouping together the assignment of parameters of a function that matches the variables pre-assigned in the declaration of the Object.

//BEFORE
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;

console.log(user.name);
// Output
John Doe



//AFTER
const user = { name: 'John Doe', age: 34 };
const { name, age } = user;

console.log(user.name);
// Output
John Doe


//ALTERNATIVE DECLARATION

const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;

console.log(user.name);
console.log(userName);
// Output
John Doe
John Doe


//FURTHER

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
const  {today : {low: lowToday}} = LOCAL_FORECAST;
const  {today : {high: highToday}} = LOCAL_FORECAST;

//> Declare type > Open braces for a nested object > Colon 
//> Open braces for nested within nested parameter > the last name will be the new name to this index
//> Close parenthesis and assigned this variable to the object it is indexing.
