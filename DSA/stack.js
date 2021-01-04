var letters = [];
var word = "racecar"
var x = "";

for (var i = 0; i < word.length; i++){
    letters.push(word[i]);
}

console.log(plate)

for(var i = 0; i< word.length; i++){

    x = x + letters.pop();
}

if (x === word){
    console.log(word + " is a palindrome.");
}else{
    console.log(word + " is not a palindrome.");
}