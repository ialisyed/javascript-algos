class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  traverse() {
    let curr = this.head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  }

  pop() {
    if (!this.head) return undefined;
    let curr = this.head;
    let newTail = curr;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    console.log(this);
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let curr = this.head;
    this.head = curr.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return this;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    let curr = this.head;
    let count = 0;
    while (count !== index) {
      curr = curr.next;
      count++;
    }
    return curr;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    let node = new Node(val);
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    let curr = this.get(index - 1);
    node.next = curr.next;
    curr.next = node;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();
    let node = this.get(index - 1);
    let toRemove = node.next;
    node.next = toRemove.next;
    this.length--;
    return true;
  }
}

let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);

// list.traverse();
