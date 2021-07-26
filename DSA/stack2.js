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
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)

stack.pop()
stack.pop()
stack.pop()
console.log(stack.pop())
