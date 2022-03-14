class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      }
    }
  }

  contains(val) {
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (val === current.value) {
        return true;
      }
      if (val > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  bfs() {
    let queue = [];
    let data = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  preOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(current);
    return data;
  }

  postOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  inOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }
}

let tree = new BST();

tree.insert(10);
tree.insert(2);
tree.insert(12);
tree.insert(4);
tree.insert(11);
tree.insert(1);
tree.insert(14);
