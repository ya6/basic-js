const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,  options) {

 // options.separator = options.separator === undefined ? '+' : options.separator;
 // options.additionSeparator = options.additionSeparator === undefined ? '|' : options.separator;
  let add='';
  if(true) {
  for (let index = 0; index < options.additionRepeatTimes; index++) {
     add +=options.addition;
     if(index<options.additionRepeatTimes-1)  add +=  options.additionSeparator;
    
  }
}

let rez ='';
for (let index = 0; index < options.repeatTimes; index++) {
  rez += str+add;
  if(index<options.repeatTimes-1)  rez +=  options.separator;
      
}
 
  return rez;
};
  