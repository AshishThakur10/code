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

    //return and remove top element in stack
    // return undefined if stack is empty
    pop(){
        if(this.count == 0) return undefined
        let deletItem = this.item[this.count -1]
        this.count -= 1
        console.log(`${deletItem} removed`)
        return deletItem
    }

    // check top element in stack
    peek(){
        console.log(`Top element is ${this.item[this.count -1]}`)
        return this.item[this.count - 1]
    }

    // check if stack is empty
    isEmpty(){
        console.log(this.count == 0 ? 'Stack is empty': 'Stack is not empty')
        return this.count == 0
    }
}

const stack = new Stack()

stack.isEmpty()

stack.push(100)
stack.push(200)

stack.peek()

stack.push(300)

stack.isEmpty()

stack.pop()
stack.pop()
stack.pop()
console.log(stack.pop())
