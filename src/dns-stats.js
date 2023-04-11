const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  domains = domains.map(el => el
    .split('.')
    .reverse()
    .map(innerEl => `.${innerEl}`)
    .map((el, ind, arr) => arr.slice(0, ind+1).join('')))

  domains = domains.flat(1)
  let containedObj = {}

  domains.forEach(el => {
    if(containedObj.hasOwnProperty(el)) {
      containedObj[el] = containedObj[el] + 1
    }
    else {
      containedObj[el] = 1
    }
  })
  
  return containedObj
}

// console.log(getDNSStats(['yandex.ru', 'ssss.ru'])); 

module.exports = {
  getDNSStats
};
