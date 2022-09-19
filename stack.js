// // import the linkedList file
const LinkedList = require("./tail.js")

//create a stack class
class Stack {
    constructor() {
        this.list = new LinkedList();
    }
    push(value) {
        this.list.prepend(value);
    }
    pop() {
        this.list.removeNodeFront();
    }
    peek() {
        return this.list.head.value;
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    getSize() {
        return this.list.getSize();
    }
    print() {
        return this.list.print();
    }
}

//Driver method
const li = new Stack();
console.log(li.isEmpty())
li.push(20)
li.push(30)
li.push(40)

li.print()
li.pop()
li.print();
console.log(li.peek())



