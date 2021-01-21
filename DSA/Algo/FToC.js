function convertToF(celsius) {
  let fahrenheit;
  fahrenheit = 9/5 * celsius + 32;
  return fahrenheit;
}

console.log(convertToF(40));

function convertToC(fahrenheit) {
  let celsius;
  celsius= fahrenheit - 32  * 5/9;
  return celsius;
}

console.log(convertToC(2));
