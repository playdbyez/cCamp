//Recursion is simply translating a loop function into a mathematical non-looped solution

//1 LOOPED FUNCTION
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }


//2 RECURSION FUNCTION

function sum(arr, n) {
if(n <= 0){ return 0;}
else 
{return sum(arr, n -1) + arr[n -1];}
}
