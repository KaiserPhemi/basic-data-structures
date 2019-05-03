// modules
const createArray = require("./src/utils/arrGenerator");
const BinarySearchTree = require("./src/binarySearchTree");

// generates an array of number
const numArr = createArray(20);

const newTree = new BinarySearchTree();
numArr.map(val => newTree.addNode(val));

console.log("");
console.log(numArr);
console.log("");
