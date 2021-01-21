function reverseString(str) {
   let rsrting = []
    for (i= str.length-1; i<0; i --){
        console.log(str[i])
         rsrting.push(str[i])  
    }
    return rsrting;
  }
  
console.log(reverseString("hello"));