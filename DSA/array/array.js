/* push()
The push() method is an in-built JavaScript method that is used to add a number, 
string, object, array, or any value to the Array. 
You can use the push() function that adds new items to the end of an array and returns the new length.
*/
const colors = ['black', 'dark green']
//console.log('before ' + colors)

colors.push('white')            // push method 
//console.log(colors);

/*unshift()
Another method is used for appending an element to the beginning of an array is the unshift() function, which adds and returns the new length. It accepts multiple arguments, attaches the indexes of existing elements, and finally returns the new length of an array.
*/

const num = [2, 3, 4, 5]

//console.log(num)
// num.unshift(1)

//console.log(num)

//const arr = colors.concat(num)
//const arr1 = []

// const arr = colors.concat(num)

// console.log(arr)


// Popping
//  /*The pop() method removes the last element from an array:
//  */
// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();





// const arrayOfOddNumbers = [1, 3, 5];
// arrayOfOddNumbers[100] = 199;
// console.log(arrayOfOddNumbers.length);

//Q 10: Given the following line of code, what would be the output of the console?
// const arr = new Array("kfdg","g")
// console.log(arr)

//Q 8: Given the following line of code, what is the length of the array “foo”?
const foo = []
//console.log(foo.length);

/* splice
How to delete an element from the array?

The arrays are objects, so we can try to use delete */
let arry = ['one', 2, false, true, undefined, null, 'removeMe']   // an array 
let spliceReturned = arry.splice(6, 1)  // first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.
//console.log(arry)  // output ['one',2,false,true,undefined,null]
//console.log(spliceReturned)  //out put [removeme]

//slice 
// it dose not change the ori. array  

const number = [1, 2, 3, 4, 5];

const num2 = number.slice(1,4);
//const num2 = number.slice(-3); // output 3,4,5
//console.log(number) // output 1,2,3,4,5
//console.log(num2)  // output 2,3,4

//SPREAD
/*
While slice() allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ...

In practice, we can use the spread operator to copy an array like so:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
thatArray equals [true, true, undefined, false, null]. thisArray remains unchanged and thatArray contains the same elements as thisArray.
*/


function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr = [...arr]
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  //console.log(copyMachine([true, false, true], 2));

  /*
  REDUCE 
The reduce() method executes a user-supplied “reducer” callback function on each element of the array, 
passing in the return value from the calculation on the preceding element. 
The final result of running the reducer across all elements of the array is a single value.

The easiest-to-understand case for reduce() is to return the sum of all the elements in an array.

The reducer walks through the array element-by-element, 
at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue
})

callbackfn is called with four arguments:

the previousValue (value from the previous call to callbackfn)
the currentValue (value of the current element)
the currentIndex, and
the object being traversed

*/

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer, 5));
// expected output: 15

const sum = array1.reduce(function(a,b){
  return a+b;
}) 
//console.log(sum) //output 10

//custom sum function

let totalsum = 0

for(var i = 0; i < array1.length; i++){
  //totalsum = totalsum + array1[i] 
  //console.log(array1[i]);
  totalsum = totalsum+array1[i];
  
}
console.log(totalsum)

array1.sort(function(a,b){  //by default ascending order
  return b-a  //descending order:
})

console.log(array1);  //4, 3, 2, 1