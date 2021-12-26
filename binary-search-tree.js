class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;
    while (true) {
      if (val > current.val) {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      } else if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let current = node ? node : this.root;
    if (val > current.val) {
      if (!current.right) {
        current.right = new Node(val);
        return this;
      }
      this.insertRecursively(val, current.right);
    } else if (val < current.val) {
      if (!current.left) {
        current.left = new Node(val);
        return this;
      }
      this.insertRecursively(val, current.left);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (val === this.root.val) return this.root;

    let current = this.root;
    let isFound = false;

    while (current && !isFound) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        isFound = true;
      }
    }

    if (!isFound) return;
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node) {
    let current = node ? node : this.root;
    if (!current) return;
    if (val < current.val) {
      if (!current.left) {
        return;
      } else {
        return this.findRecursively(val, current.left);
      }
    } else if (val > current.val) {
      if (!current.right) {
        return;
      } else {
        return this.findRecursively(val, current.right);
      }
    }

    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let values = [];
    let current = this.root;

    const traverse = (currentNode) => {
      // Add the current node to the values array
      values.push(currentNode.val);
      currentNode.left && traverse(currentNode.left);
      currentNode.right && traverse(currentNode.right);
    };

    traverse(current);
    return values;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let values = [];
    let current = this.root;

    const traverse = (currentNode) => {
      currentNode.left && traverse(currentNode.left);
      values.push(currentNode.val);
      currentNode.right && traverse(currentNode.right);
    };

    traverse(current);
    return values;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let values = [];
    let current = this.root;

    const traverse = (currentNode) => {
      currentNode.left && traverse(currentNode.left);
      currentNode.right && traverse(currentNode.right);
      values.push(currentNode.val);
    };

    traverse(current);
    return values;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
