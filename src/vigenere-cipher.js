const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// if(key[i].match(/[a-z]/i)) {
//   key = `${key}${key[i]}`
// }

class VigenereCipheringMachine {
  encrypt(message = '', key = '') {
    const aplhabet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']

    if(message === '' || key === '') {
      throw new Error("Incorrect arguments!");  
    }

    message = message.toUpperCase()
    key = key.toUpperCase()

    for (let i = 0; i < (message.length - key.length); i++) {
      key = `${key}${key[i]}`
    }

    let kol = 0
    let code = ''
    for(let i = 0; i< message.length; i++) {
      if(key[i].match(/[A-Z]/i)) {
          code+=aplhabet[i-kol]

      }
      else {
        kol++
      }
    }

    return code

  }
  decrypt(message = '', key = '') {
    const aplhabet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']

    if(message === '' || key === '') {
      throw new Error("Incorrect arguments!");  
    }

    message = message.toUpperCase()
    key = key.toUpperCase()

    for (let i = 0; i < (message.length - key.length); i++) {
      key = `${key}${key[i]}`
    }

    return key
  }
}

module.exports = {
  VigenereCipheringMachine
};
