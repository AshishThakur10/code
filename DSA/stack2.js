class Stack {
    constructor(){
        this.item = []
        this.count = 0
    }

    // add element to top of stack
    push(element){
        this.item[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)

