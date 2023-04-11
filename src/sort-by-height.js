const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

  let minusOnes = []
  let arrLength = arr.length

  arr.forEach((el, ind) => {
    if(el === -1) {
      minusOnes.push(ind)
    }
  })

  arr = arr.sort((a, b) => a - b).filter(el => el !== -1)
  
  let newArr = []
  let i = 0, j = 0
  
  while (i < arrLength) {
    if(minusOnes.includes(i)) {
      newArr.push(-1)
    }
    else {
      newArr.push(arr[j])
      j++
    }

    i++
  }

  return newArr
}

module.exports = {
  sortByHeight
};
