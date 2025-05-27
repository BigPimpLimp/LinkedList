import './style.css';

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
            this.head = element.value;
        } else {
            // this.tail.next = element.value;
        }
        console.log(element.value);
        console.log(this.head)
        
    }

    prepend(value) {
        
    }

    head() {
        return this.head;
    }
}

class node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }


}

const list = new linkedList();

list.append('cattttt');
list.append('doggg')