const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, dep = 1, maxDepth = dep) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i], dep+1));
        }
    }
    console.log({arr, dep, maxDepth})
    return maxDepth
  }
}

module.exports = {
  DepthCalculator
};
