const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits)


//without using a method
var array1 = ["yes", "no", "maybe", "always", "sometimes", "never", "if"];
var array2 = [5,8,2,9,5,6,3,1];

function reverseArray(arr){
var newArray = [];  //new   array to fill it  later 
var i = arr.length - 1;
for(i;i>=0;i--){
    newArray.push(arr[i])
}
console.log(newArray)
return newArray

}
reverseArray(array1)
