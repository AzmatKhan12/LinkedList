class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }

    // Add the node at first position
    prepend(value) {
        const node = new Node(value);
        // first condition
        if (this.isEmpty()) {
            this.head = node;
        }
        //2nd condition
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    //print method
    print() {
        if (this.isEmpty()) {
            console.log('List is Empty');
        }
        else {
            let curr = this.head;
            let listValue = '';
            while (curr) {
                listValue += `${curr.value}` + ' ';
                curr = curr.next;
            }
            console.log(listValue);

        }

    }

    //Add new node at the End
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node
        }
        this.size++;
    }
    // insert a node at he given index
    insert(value, index) {
        //first condition
        if (index < 0 || index > this.size) {
            console.log('out of the index');
            return;
        }
        //2nd condition
        if (index === 0) {
            this.prepend(value);
        }
        //3rd condition
        else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node
            this.size++;
        }

    }
}

let list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
//prepend
list.prepend(10);
list.print();

list.prepend(20);
list.prepend(30);
list.print();

//append
list.append(40);
list.print();

//AT given index
list.insert(10, 7);
list.print();

list.insert(15, 2);
list.print();





