const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = n.toString().split('')
  let mas = []
  for (let i = 0; i < n.length; i++) {
    let newNumb = n.slice(0, i).join('') + n.slice(i+1).join('')
    mas.push(Number(newNumb))
  }
  return Math.max(...mas)
}

module.exports = {
  deleteDigit
};
