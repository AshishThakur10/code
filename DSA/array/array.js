/* push()
The push() method is an in-built JavaScript method that is used to add a number, 
string, object, array, or any value to the Array. 
You can use the push() function that adds new items to the end of an array and returns the new length.
*/
const colors = ['black','dark green']
//console.log('before ' + colors)

colors.push('white')            // push method 
//console.log(colors);

/*unshift()
Another method is used for appending an element to the beginning of an array is the unshift() function, which adds and returns the new length. It accepts multiple arguments, attaches the indexes of existing elements, and finally returns the new length of an array.
*/

const num = [2,3,4,5]

//console.log(num)
// num.unshift(1)

//console.log(num)

//const arr = colors.concat(num)
//const arr1 = []

const arr = colors.concat(num)

console.log(arr)


Popping
 /*The pop() method removes the last element from an array:
 */
Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
