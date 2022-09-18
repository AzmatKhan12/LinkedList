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

    //Remove the node from the index.
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            console.log('index out of bound');
            return;
        }
        let removeNode = this.head;
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        }
        else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    //Remove node from value
    removeValue(value) {
        if (this.isEmpty()) {
            console.log('list is Empty');
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        }
        else {
            let prev = this.head;
            let removeNode = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if (prev.next) {
                removeNode = prev.next;
                prev.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    //Search value in linkedList
    search(value) {
        if (this.isEmpty()) {
            retrun - 1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++
        }
        return -1; /*while value is not present in a list
                    curr reached to the null then simply return -1*/
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

//Add node AT given index
list.insert(10, 7);
list.print();

list.insert(15, 2);
list.print();

//remove node from index
list.removeFrom(2);
list.print()
list.removeFrom(2);
list.print()

//remove node from value;
// list.removeValue(30);
// list.print();
// list.removeValue(40);
// list.print();

// search the value.
console.log(list.search(20));
console.log(list.search(30));
console.log(list.search(15));








