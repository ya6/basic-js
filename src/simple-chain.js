const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return chainMaker.chain.length;
  },
  addLink(value) {

  // if(typeof value != "function"  )
    chainMaker.chain.push(value);

    return this;
  },
  removeLink(position) {

    if( !Number.isInteger(position)  || position <1 || position > chainMaker.chain.length)  chainMaker.chain = [];
    if( !Number.isInteger(position)  || position <1 || position > chainMaker.chain.length)  throw "Error";

    try {
      Number.isInteger(position)  && position >=1 && position<= chainMaker.chain.length;
    } catch (err) {
     
  
      console.error('error');
    
      
    }
    chainMaker.chain.splice(position-1,1); 
    return this;
  },
  reverseChain() {
    chainMaker.chain.reverse();
    return this;
  },
  finishChain() {
    let chainString =``;
    chainMaker.chain.forEach((el, index) => {
        if ( typeof el  == undefined ) chainString += `(  )`;
        else chainString += `( ${(el)} )`;
      
        if(index !== this.chain.length-1)  chainString += `~~`;
    });
   
    this.chain = [];
    return  chainString;
  }
};

module.exports = chainMaker;