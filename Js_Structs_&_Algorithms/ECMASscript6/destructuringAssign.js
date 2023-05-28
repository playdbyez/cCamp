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
