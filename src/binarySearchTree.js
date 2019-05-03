// modules
const Node = require("./utils/nodeClass");

/**
 * @desc implemention of the binary search tree
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  /**
   * @desc inserts a node to the tree
   * @param {number} data
   */
  addNode(data) {
    const newNode = this.rootNode;
    if (newNode === null) {
      this.rootNode = new Node(data);
      return;
    } else {
      const searchTree = newNode => {
        if (data < newNode.data) {
          if (newNode.left === null) {
            newNode.left = new Node(data);
            return;
          } else if (newNode.left !== null) {
            return searchTree(newNode.left);
          }
        } else if (data > newNode.data) {
          if (newNode.right === null) {
            newNode.right = new Node(data);
            return;
          } else if (newNode.right !== null) {
            return searchTree(newNode.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(newNode);
    }
  }

  /**
   * @desc gets the minimum node in the tree
   */
  getMinimum() {
    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  /**
   * @desc gets the maximum node in the tree
   */
  getMaximum() {
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

  /**
   * @desc checks if a node exist on the tree
   * @param {number} data
   */
  checkNode(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
