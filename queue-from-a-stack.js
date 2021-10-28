class Stack {
    constructor() {
        this.data = [];
    }

    push(rec) {
        this.data.push(rec);
    }

    pop() {
       return this.data.pop();
    }

    peek() {
      return this.data[this.data.length - 1];
    }
};

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(rec) {
        this.first.push(rec);
    }

    remove() {
        while(this.first.peek()) {
            this.second.push(this.first.pop());
        }

        let record = this.second.pop();

        while(this.second.peek()) {
            this.first.push(this.second.pop());
        }
        return record;
    }

    peek() {
        return this.second.peek();
    }
}

const result = new Stack();
result.push(1);
result.push(2);
result.push(3);
// result.pop();
console.log(result);

const result2 = new Queue();
result2.add(1);
result2.add(2);
result2.add(3);
// result2.remove();
console.log(result2);


