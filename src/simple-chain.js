const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  storageChain: [],
  getLength() {
    return this.storageChain.length
  },
  addLink(value = '') {
    this.storageChain.push(value)  
    return this
  },
  removeLink(position) {
    if(Number(position) && position >= 1 && position <= this.storageChain.length) {
        this.storageChain.splice(position-1, 1)
        return this
    }
    else {
      this.storageChain = []
      throw new Error("You can't remove incorrect link!");
    }
    
  },
  reverseChain() {
    this.storageChain = this.storageChain.reverse()
    return this
  },
  finishChain() {
    let stringChain = ''
    this.storageChain.forEach((el, ind)=> {
      if(ind+1 === this.storageChain.length)
        stringChain = `${stringChain}( ${el} )`
      else 
        stringChain = `${stringChain}( ${el} )~~`
    }) 
    this.storageChain = []
    return stringChain
  }
};

module.exports = {
  chainMaker
};
