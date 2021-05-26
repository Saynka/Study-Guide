// 1. Create an array of numbers

let numbers = [2, 4, 6, 8, 10];

// 2. Using a for loop, iterate the array, printing out the square of each numbers

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  console.log(i, num * num);
}


// 3. Using a while loop, iterate the array, printing out the square of each numbers

let i = 0;
while (i < numbers.length) {
  let num = numbers[i];
  console.log(i, num * num);
  i++;
}


// 4. Write a function called "numberOfElements" that takes in an array as a parameter
//    This function should return the number of elements in the array
//    Invoke your function and console.log the results

function numberOfElemnts(a) {
  return a.length;
}

let len = numberOfElemnts(numbers);
console.log("Length:", len);


// 5. Write a function called "forSquares" that takes in an array as a parameter
//    This function should use a for loop to return a new array containing the squares of each number
//    Invoke your function and console.log the results

function forSquares(a) {
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    let num = a[i];
    newArray.push(num * num);
  }
  return newArray;
}

let forResult = forSquares(numbers);
console.log('forSquares:', forResult);


// 6. Write a function called "whileSquares" that takes in an array as a parameter
//    This function should use a while loop to return a new array containing the squares of each number

function whileSquares(a) {
  let i = 0;
  let newArray = [];
  while (i < numbers.length) {
    let num = numbers[i];
    newArray.push(num * num);
    i++;
  }
  return newArray;
}

let whileResult = whileSquares(numbers);
console.log('whileSquares:', whileResult);


// 7. Using the map() method, create a new array from numbers, containing the squares of each number
//    console.log the results
//    Do this twice. Once with a "normal" function and once with an arrow function

let mapResultNormal = numbers.map(function (num, i) {
  return num * num;
});

console.log('mapped normal', mapResultNormal);


let mapResultArrow = numbers.map((num, i) => {
  return num * num;
});

console.log('mapped arrow', mapResultArrow);


// 8. Using the filter() method, create a new array from numbers containing only numbers > 5
//    console.log the results
//    Do this twice. Once with a "normal" function and once with an arrow function

let bigOnesNormal = numbers.filter(function (num) {
  if (num > 5) { return true; }
  else { return false; }
});

console.log('filter normal', bigOnesNormal);

let bigOnesArrow = numbers.filter((num) => {
  return num > 5
});

console.log('filter arrow', bigOnesArrow);


// 9. Using the reduce method, create an object from numbers where the key is the number from the array
//    and the value is the square of that number, like this:
//    {
//      2: 4,      
//      4: 16,
//      6: 36,
//      8: 64,
//     10: 100
//    }

let squareObject = numbers.reduce((accumulator, value, idx) => {
  accumulator[value] = value * value;
  return accumulator;
}, {});

console.log('reduce object', squareObject);