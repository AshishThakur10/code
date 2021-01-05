let array1 =[1,2,3,4,5,6,7,8]

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array1.filter(isPrime));