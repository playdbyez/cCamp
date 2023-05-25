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




//3 RECURSION COUNTUP
function countup(n) {
  if (n < 1) {return [];} 
    else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
                        }
}
console.log(countup(5));




//4 RECURSION COUNTDOWN
function countdown(n){
  if(n<1){ return [];}
  else
  {
    var count = countdown(n-1);
    count.unshift(n);
    return count;
  }
}
console.log(countdown(10));


