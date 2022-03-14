class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.length--;
      popped.prev = null;
    }
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = oldHead.next;
      newHead.prev = null;
      this.head = newHead;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    if (!this.length) return this.push(val);
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return false;
    if (index <= Math.floor(this.length) / 2) {
      let curr = this.head;
      let count = 0;
      while (count !== index) {
        curr = curr.next;
        count++;
      }
      return curr;
    } else {
      let curr = this.tail;
      let count = this.length - 1;
      while (count !== index) {
        curr = curr.prev;
        count--;
      }
      return curr;
    }
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
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);
    let node = this.get(index);
    let prev = node.prev;
    let newNode = new Node(val);
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = node;
    node.prev = newNode;
    this.length++;
    return true;
  }
}

let list = new DoublyLinkedList();

list.push(100);
list.push(200);
list.push(300);
list.push(400);
