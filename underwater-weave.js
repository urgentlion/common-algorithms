class Queue {
    constructor() {
        this.data = [];
    }

    add(rec) {
        this.data.unshift(rec);
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

const weave = (srcOne, srcTwo) => {
    const q = new Queue();

    while(srcOne.peek() || srcTwo.peek()) {
        if(srcOne.peek()) {
            q.add(srcOne.remove());
        }

        if(srcTwo.peek()) {
            q.add(srcTwo.remove());
        }
    }
    return q;
};

const q1 = new Queue();
q1.add(6);
q1.add(4);
q1.add(2);

const q2 = new Queue();
q2.add(5);
q2.add(3);
q2.add(1);

const result = weave(q1, q2);
console.log(result);