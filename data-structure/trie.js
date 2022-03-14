class TrieNode {
  constructor(val) {
    this.val = val;
    this.isWord = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode("");
  }

  insert(word = "") {
    if (!word) return false;
    let n = this.root;
    for (let i = 0; i < word.length; i++) {
      let c = word[i];
      if (!n.children[c]) {
        n.children[c] = new TrieNode(c);
      }
      n = n.children[c];
      if (i === word.length - 1) {
        n.isWord = true;
      }
    }
  }

  autocomplete(fragment = "") {
    if (!fragment) return null;
    let result = [];
    let n = this.root;
    for (let i = 0; i < fragment.length; i++) {
      const c = fragment[i];
      if (!n.children[c]) {
        break;
      }
      n = n.children[c];
      if (i === fragment.length - 1) {
        const queue = [];
        queue.push([n, fragment]);
        while (queue.length) {
          const el = queue.shift();
          const [node, word] = el;
          if (node.isWord) {
            result.push(word);
          }
          for (const j in node.children) {
            const child = node.children[j];
            const childWord = word + child.val;
            queue.push([child, childWord]);
          }
        }
      }
    }
    return result;
  }
}
