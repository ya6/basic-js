const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!(arr instanceof Array)) return false;
  let _arr =[];
arr.forEach(function(el) {
    if(typeof el ==='string' && el !== '')
    _arr.push(el);
});

let _rez = _arr.map((el) => ( el.trim()));
  let __rez = _rez.map((el) => ( el[0].toUpperCase())).sort();
  let rez = __rez.join('');
return rez;
};
