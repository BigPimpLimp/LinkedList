// import './style.css';

console.log('Connected');

class linkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
        this.size = 0;
    }

    append(value) {
        const element = new node(value);
        if (!this.head) {
            this.head = element;
            this.size++;
            
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = element;
            this.tail = element;
            this.size++;

        }
    }

    prepend(value) {
        const element = new node(value);
        if (!this.head) {
            this.head = element;
            this.size++;
            
        } else {
            let oldhead = this.head
            this.head = element;
            let current = this.head;
            current.nextNode = oldhead;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = element;
            this.tail = element;
            this.size++;

        }
    }

    returnHead() {
        return this.head.value;
    }

    returnTail() {
        return this.tail.value;
    }

    toString() {
        let string = `( ${this.head.value} )`;
        let current = this.head;
        while (current.nextNode) {
            string += ` -> ( ${current.nextNode.value} )`;
            current = current.nextNode;
        }
        return string;
    }
}

class node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new linkedList();

list.append('cat');
list.append('dog');
list.append('lizard');
list.append('toad');
list.append('dragon');
list.append('mushroom');
console.log('yooo')
list.prepend('gyaatt')
console.log(list.toString());
console.log(list.returnTail());
console.log(list.returnHead());