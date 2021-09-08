function showconsole(sum) {
    console.log(sum)
}

function calculater(num1,num2,mycallback){
    let sum = num1 + num2
    mycallback(sum)          //running the showconsole function
}

calculater(3,6,showconsole)  //passing a function as a parameter