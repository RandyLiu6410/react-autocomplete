class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return this._getAllWords(node, prefix);
  }

  _getAllWords(node, prefix) {
    const result = [];
    this._traverse(node, prefix, result);
    return result;
  }

  _traverse(node, currentWord, result) {
    if (node.isEndOfWord) {
      result.push(currentWord);
    }

    for (const [char, childNode] of Object.entries(node.children)) {
      this._traverse(childNode, currentWord + char, result);
    }
  }
}

const trie = new Trie();

const words = [
  "高",
  "高讀音",
  "高字",
  "高英文",
  "高拼音",
  "高造詞",
  "高部首的字",
  "高雄美食",
  "高雄天氣",
  "高雄捷運",
];
words.forEach((word) => trie.insert(word));

export default trie;
