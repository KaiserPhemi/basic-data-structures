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
   * @desc adds a node to the tree
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

  // gets minimum on the tree
  getMinimum() {
    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  // gets maximum on the tree
  getMaximum() {
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

  // checks if a node exist on the tree
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

  // removes a node from the tree
  // removeNode(rootNode, data) {
  //   if (rootNode === null) {
  //     return null;
  //   } else if (data === rootNode.data) {
  //     if (rootNode.left === null && rootNode.right === null) {
  //       return null;
  //     } else if (rootNode.left === null) {
  //       return rootNode.right;
  //     } else if (rootNode.right === null) {
  //       return rootNode.left;
  //     }

  //     let tempNode = rootNode.right;
  //     while (tempNode.left !== null) {
  //       tempNode = tempNode.left;
  //     }
  //     rootNode.data = tempNode.data;
  //     rootNode.right = removeNode(rootNode.right, tempNode.data);
  //     return rootNode;
  //   } else if (data < rootNode.data){
  //     rootNode.left = removeNode(rootNode.left, data);
  //     return rootNode;
  //   } else {
  //     rootNode.right = remove(rootNode.right, data);
  //     return rootNode;
  //   }
  // }

  // // calls remove node
  // handleRemove(data) {
  //   this.removeNode(data);
  //   this.root = this.removeNode(this.root, data);
  // }
}
