class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
      return this.head;  
    }

    getLast() {
        if(!this.head) {
            return null;
        }

        let node = this.head;

        while(node) {
            if(!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }
}

const node = new Node(10);
const list = new linkedList();
list.head = node;
list.insertFirst(15);
list

