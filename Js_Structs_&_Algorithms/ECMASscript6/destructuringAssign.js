//This assignment makes the declaration of functions easier 

//BEFORE
const user = { name: 'John Doe', age: 34 };
const name = user.name;
const age = user.age;



//AFTER
const { name, age } = user;
