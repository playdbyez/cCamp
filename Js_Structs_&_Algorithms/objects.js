//Objects in JS are similar to Classes in C
// Instead of a function you can also create an object :

myDog 
{
"Spaced name": "Malfoy,"
"tails" : 1,
"legs" : 4
};

//To access members of the object you must call them with- 
//the dot operator if the asset is one word long:

const legsof = myDog.legs;
console.log(myDog.legs);
// Output
4

//Or the subscript operator if the asset is more than one word long:

const nameof = myDog["Space name"];
console.log(myDog["Space name"]);

// Output
Malfoy
