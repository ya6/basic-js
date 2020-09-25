const CustomError = require("../extensions/custom-error");

module.exports = function countCats( arr ) {

  _arr= [].concat(...arr);
  if (_arr.length ===0) return 0; 

rez = _arr.map((el) => {if (el == '^^') return 1; else return 0});

return rez.reduce((sum,el)=>(sum+el));
};
