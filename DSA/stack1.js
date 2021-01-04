var Stack = function(){
    this.count = 0;
    this.storage = {};

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }
}


var myStack = new Stack();

myStack.push("a");
myStack.push("m");
myStack.push("a");
myStack.push("n");

console.log(myStack.storage);