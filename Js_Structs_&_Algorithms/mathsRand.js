

// The function Math.random generates a decimal number from bellow 1 however completely random

return Math.random();
// Output
0.7678654445239281


// The function Math.floor will truncate the result into an integer type of result

var numb = 1.8678654445239281;
return Math.floor(numb);
// Output
0


//However combined both functions can generate an integer withouth any values hard-coded
console.log(Math.floor(Math.random() * 10));
// Output
random int from 1 - 9 
