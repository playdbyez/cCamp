//Objects in JS are similar to Classes in C
// Instead of a function you can also create an object :

myDog = 
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




//If the asset is more than one word long, use the subscript operator like so:

const nameof = myDog["Space name"];
console.log(myDog["Space name"]);

// Output
Malfoy




//Or like so:

const value = "Space name";
const valueLookup = myDog[value];
console.log(valueLookup);


// Output
Malfoy


//If an object is declared with values instead of names 
//Then substrings can also be used for string-matching within an object

const dogs = 
{
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};


const myDog = "Hunter";
const myBreed = dogs[myDog];  //Searching within the dogs object for a value of "Hunter" in order to display its value.
console.log(myBreed);

// Output
Doberman




//When altering a pre-made object its neccessary to use the right declarations:

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";
console.log(myDog.name);

// Output
Happy Coder




//The same declarations are used in order to add new properties to the object

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "bow-wow";
console.long(myDog.bark);     //Outputing the value of a properties that was not there before

// Output
bow-wow



//To delete a property simple add

delete myDog.bark;








