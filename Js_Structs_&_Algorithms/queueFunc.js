// A QUEUE is an abstract Data-Structure where items are kept in order.

function nextInLine(arr, item) {
                                  var ins = arr.push(item);
                                  var outs = arr.shift();
                                  return outs;                  }

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
