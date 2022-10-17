const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('')
  kol = 0
  
  for (let i = 0; i < str.length; i++) {
    let inInd = i

    while(str[i] === str[inInd]) {
      kol++
      inInd++
    }

    if(kol>1) {
      str.splice(i, kol, kol, str[i])
      i++
    }
    
    kol = 0
  }
  return str.join('')
}

module.exports = {
  encodeLine
};
