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

  constructor(isBool = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.isBool = isBool
  }

  getModifiedKey(message, key) {
    let modifiedKey = ''
    let keyLength = key.length
    let j = 0

    for (let i = 0; i < message.length; i++) {
      let modi = (i - j) % keyLength
      if(this.alphabet.includes(message[i])) {
        modifiedKey = `${modifiedKey}${key[modi]}`
      }
      else {
        j++
        modifiedKey = `${modifiedKey}${message[i]}`
      }
    }

    return modifiedKey
  }

  encrypt(message = '', key = '') {

    if(message === '' || key === '') {
      throw new Error("Incorrect arguments!");  
    }

    key = key.toUpperCase()
    message = message.toUpperCase()

    let modifiedKey = this.getModifiedKey(message, key)

    let shifr = ``

    for (let i = 0; i < message.length; i++) {

      let elementOfShifr = message[i]

      if(this.alphabet.includes(message[i])) {
        let messageLetter = this.alphabet.indexOf(message[i])
        let keyLetter = this.alphabet.indexOf(modifiedKey[i])
        
        elementOfShifr = this.alphabet[(messageLetter + keyLetter) % this.alphabet.length]
      }

      shifr = `${shifr}${elementOfShifr}` 
    }

    return this.isBool ? shifr : shifr.split('').reverse().join('')

  }
  decrypt(message = '', key = '') {

    if(message === '' || key === '') {
      throw new Error("Incorrect arguments!");  
    }

    key = key.toUpperCase()
    message = message.toUpperCase()

    let modifiedKey = this.getModifiedKey(message, key)

    let deshifr = ``

    for (let i = 0; i < message.length; i++) {

      let elementOfShifr = message[i]

      if(this.alphabet.includes(message[i])) {
        let messageLetter = this.alphabet.indexOf(message[i])
        let keyLetter = this.alphabet.indexOf(modifiedKey[i])
        
        elementOfShifr = this.alphabet[((messageLetter - keyLetter < 0 ? messageLetter - keyLetter + 26 : messageLetter - keyLetter)) % this.alphabet.length]
      }

      deshifr = `${deshifr}${elementOfShifr}` 
    }

    return this.isBool ? deshifr : deshifr.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
