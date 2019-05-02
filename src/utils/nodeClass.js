/**
 * @desc defines a node on the tree
 */
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left; // points to left node
    this.right = right; // points to right node
  }
}

module.exports = Node;
