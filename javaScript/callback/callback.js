function mycallback(sum) {
    console.log(sum)
}

function calculater(num1,num2,mycallback){
    let sum = num1 + num2
    mycallback(sum)
}

calculater(3,6,mycallback)