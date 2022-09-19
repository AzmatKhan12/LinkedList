class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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

    //Add new node at the first positon
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }                                  // time complexcity is O(1)
        else {
            node.next = this.head;
            this.head = node
        }
        this.size++;
    }

    //Add the node at the last position
    append(value) {
        const node = new Node(value);
        if (this.isEmpty) {
            this.head = node;
            this.tail = node;           // time complexcity is O(1)
        }
        else {
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }

    //Remove node from the front

    removeNodeFront() {
        if (this.isEmpty()) {
            return null;
        }
        else {
            const value = this.head.value;  // time complexcity is O(1)
            this.head = this.head.next;
            this.size--;
            return value;
        }
    }

    //Remove node frome the last
    removeNodeLast() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.tail.value;
        if (size === 1) {
            this.head = null;                  // time complexcity is O(N) ie linear time complexcity
            this.tail = null;
        }
        else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }

}