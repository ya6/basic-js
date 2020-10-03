const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(flag) {
    this.flag = (flag === false) ? false : true;
  }

  encrypt(str, key) {

    let _str = str.toUpperCase();
    let _key = key.toUpperCase();


    let __key = '';
    let i = 0;
    //  console.log(_key.length < _str.length)
    if (_key.length < _str.length) {
      let rep = Math.ceil(_str.length / _key.length);
      _key = _key.repeat(rep);

      for (let index = 0; index < _str.length; index++) {
        if (_str.charCodeAt(index) >= 65 && _str.charCodeAt(index) <= 90) {
          __key += _key[i++];

        } else __key += _str[index];

      }
    }
    //   console.log('__key ' + __key);
    let rez = '';
    let char = 0;

    for (let index = 0; index < str.length; index++) {
      if (_str.charCodeAt(index) >= 65 && _str.charCodeAt(index) <= 90) {
        char = (_str.charCodeAt(index) - 65) + (__key.charCodeAt(index));
        if (char > 90) char -= 26;
        char = String.fromCharCode(char);
      } else char = _str[index];

      rez += char;
    }
    rez = (this.flag) ? rez : rez.split("").reverse().join("");
    return rez;

  }
  decrypt(str, key) {
   
    let _str = str.toUpperCase();
    let _key = key.toUpperCase();


    let __key = '';
    let i = 0;
    //  console.log(_key.length < _str.length)
    if (_key.length < _str.length) {
      let rep = Math.ceil(_str.length / _key.length);
      _key = _key.repeat(rep);

      for (let index = 0; index < _str.length; index++) {
        if (_str.charCodeAt(index) >= 65 && _str.charCodeAt(index) <= 90) {
          __key += _key[i++];

        } else __key += _str[index];

      }
    }
    //   console.log('__key ' + __key);
    let rez = '';
    let char = 0;

    for (let index = 0; index < str.length; index++) {
      if (_str.charCodeAt(index) >= 65 && _str.charCodeAt(index) <= 90) {
        char = (_str.charCodeAt(index)) - (__key.charCodeAt(index))+65;
        if (char < 65) char += 26;
        char = String.fromCharCode(char);
      } else char = _str[index];

      rez += char;
    }
    rez = (this.flag) ? rez : rez.split("").reverse().join("");
    return rez;
  }
}

module.exports = VigenereCipheringMachine;