const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");  
  }
  transformedArr = [...arr]
  for(let i = 0; i < arr.length; i++) {
    if(transformedArr[i] === '--discard-prev' && i!== 0){
      transformedArr.splice(i-1, 1)
    }

    if(transformedArr[i] === '--discard-next' && i+1 !== transformedArr.length) {
      transformedArr.splice(i+1,1)
    }

    if(transformedArr[i] === '--double-next' && i+1 !== transformedArr.length) {
      transformedArr.splice(i+1,0,transformedArr[i+1])
    }
    
    if(transformedArr[i] === '--double-prev' && i!== 0) {
      transformedArr.splice(i-1,0,transformedArr[i-1])
      i+=1
    }
  }

  let newArr = []
  for (let i = 0; i < transformedArr.length; i++) {
    if(transformedArr[i] === "--discard-prev" || transformedArr[i] === "--double-next" || transformedArr[i] === "--discard-next" ||transformedArr[i] === "--double-prev" ) {
      continue
    }
    newArr.push(transformedArr[i])
  }

  return newArr
}

module.exports = {
  transform
};
