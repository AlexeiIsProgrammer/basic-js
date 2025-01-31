const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options

  if(typeof str !== 'object')
    str = str.toString()

  if(typeof addition !== 'object')
    addition = addition.toString()

  let subSep='';
  for (let i = 0; i < additionRepeatTimes; i++) {
    if(i+1 !== additionRepeatTimes) {
      subSep += `${addition}${additionSeparator}`
    }
    else {
      subSep += `${addition}`
    }
    
  }

  let mainStr='';

  for (let i = 0; i < repeatTimes; i++) {
    if(i+1 !== repeatTimes) {
      mainStr += `${str}${subSep}${separator}`
    }
    else {
      mainStr += `${str}${subSep}`
    }   
  }

  return mainStr
}

module.exports = {
  repeater
};
