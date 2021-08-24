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