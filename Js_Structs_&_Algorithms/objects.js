  //Objects in JS are similar to Classes in C
// Instead of a function you can also create an object :

myDog = 
{
"Spaced name": "Malfoy,"
"tails" : 1,
"legs" : 4
};




//ACCESSING A ONE WORD MEMBER
const legsof = myDog.legs;
console.log(myDog.legs);

// Output
4

//ACCESSING A MULTI-WORD MEMBER
const nameof = myDog["Space name"];
console.log(myDog["Space name"]);

// Output
Malfoy


//ALTERNATIVE//ACCESSING A MULTI-WORD MEMBER
const value = "Space name";
const valueLookup = myDog[value];
console.log(valueLookup);


// Output
Malfoy


//INDEXING SEARCH 
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




//EDITING OBJECT
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




//ADD PROPERTY
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



//DELETE A PROPERTY
delete myDog.bark;



//OBJECT INSIDE FUNCTION:
function phoneticLookup(val) {
  let result = "";

   const lookup =
  {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
  };
  result = lookup[val];

  return result;
}

phoneticLookup("charlie");

// Output
Chicago





