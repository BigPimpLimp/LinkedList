// import './style.css';

console.log("Connected");

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
      let oldhead = this.head;
      this.head = element;
      this.head.nextNode = oldhead;
      this.size++;
    }
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (!current) return null;
      current = current.nextNode;
    }
    return current ? current.value : null;
  }

  returnHead() {
    return this.head.value;
  }

  returnTail() {
    return this.tail.value;
  }

  pop() {
    let current = this.head;
    while (current) {
      if (current.nextNode === this.tail) {
        this.tail = current;
        current.nextNode = null;
      }
      current = current.nextNode;
    }
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return `${current.value} was found!`;
      }
      current = current.nextNode;
    }
    return `${value} was not found!`;
  }

  find(value) {
    let current = this.head;
    let counter = 0;
    while (current) {
      if (current.value === value) {
        return `Value was found at index ${counter}`;
      }
      current = current.nextNode;
      counter++;
    }
    return "Value was not found";
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

  insertAt(value, index) {
    let current = this.head;
    let prev;
    let counter = 0;
    while (current) {
      if (counter === index) {
        const element = new node(value, current);
        prev.nextNode = element;
        current = element;
      }
      prev = current;
      current = current.nextNode;
      counter++;
    }
  }

  removeAt(index) {
    let current = this.head;
    let prev;
    let counter = 0;
    while (current) {
      if (counter === index) {
        current = current.nextNode;
        prev.nextNode = current;
      }
      prev = current;
      current = current.nextNode;
      counter++;
    }
  }

}

class node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new linkedList();

list.append("cat");
list.append("dog");
list.append("lizard");
list.append("toad");
list.append("dragon");
list.append("mushroom");
console.log("yooo");
list.prepend("bahahahah");
list.pop();
list.pop();
console.log(list.toString());
list.insertAt('hippo', 3);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
// console.log(list.returnTail());
// console.log(list.returnHead());
// console.log(list.at(4));
// console.log(list.contains("toadasdfaf"));
// console.log(list.find("lizard"));
