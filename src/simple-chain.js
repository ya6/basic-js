const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value= "GIGIgi") {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    try {
      isInteger(position) && position>=0 && position<= this.chain.length;
    } catch (error) {
      this.chain = [];
      this.chain = [];
      console.error('error');
    
      throw new CustomError('error');
      
    }
    this.chain.splice(position-1,1); 
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainString ='';
    this.chain.forEach((el, index) => {
        if (el === 'GIGIgi' ) chainString += `(  )`;
        else chainString += `( ${String(el)} )`;
      
        if(index != this.chain.length-1)  chainString += `~~`;
    });
   
    this.chain = [];
    return  chainString
  }
};

module.exports = chainMaker;