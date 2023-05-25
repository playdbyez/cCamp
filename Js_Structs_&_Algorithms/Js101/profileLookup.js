// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  var output;
for (let i = 0; i <contacts.length; i++){
if (contacts[i].firstName != name) {output = "No such contact";}

if (contacts[i].firstName == name) {
      if (contacts[i].prop = "lastName"){ output= contacts[i].lastName;}}

  if (contacts[i].firstName == name) {
    if (prop == "likes")
      if (contacts[i].prop = "likes"){return contacts[i].likes;}}

    if  (prop == "address") {return "No such property";}  
}

 return output;
  
  
  // Only change code above this line
}

