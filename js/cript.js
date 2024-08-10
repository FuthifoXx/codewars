'strict';
//Sum of positive
//You get an array of numbers, return the sum of all the positive ones.

// function positiveSum(arr) {
//   return arr.filter((a) => a >= 0).reduce((a,b)=>{return a + b},0)
// }

const positiveSum = (arr) => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);

// console.log(positiveSum([1, 2, 3, 4]));
/////////////////////////////////////////////////////
//Exponential
const exponential = (numbers) =>
  numbers.reduce((a, b) => {
    return a + Math.pow(b, 2);
  }, 0);
console.log(exponential([1, 2, 3, 4]));

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}
