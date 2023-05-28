//This assignment makes the declaration parameter calls much easier 
//By grouping together the assignment of parameters of a function that matches the variables pre-assigned in the declaration of the Object.

//BEFORE
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;



//AFTER
const { name, age } = user;


