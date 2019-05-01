/**
 * @desc creates an array of integers
 * @param {number} arrLength
 */
const createArray = arrLength => {
  let numArray = [];
  for (let i = 1; i <= arrLength; i++) {
    numArray.push(Math.ceil(Math.random() * 100));
  }
  return numArray;
};

module.exports = createArray;
