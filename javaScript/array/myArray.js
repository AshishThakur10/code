let arr = [1,2,3,4,5]
let rarr = []

for(i = 0; i< arr.length;i++){
    console.log(arr[i])
}

for(i = 0; i< arr.length; i++){
    
    console.log(arr[i])
}

for(i = arr.length -1 ; i >= 0; i--){
    rarr.push(arr[i])
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(reducer));

let sum = 0;

for (let i = 0; i< arr.length; i++){
    sum = sum + arr[i];
}

console.log(sum);
console.log(arr)
console.log(rarr)