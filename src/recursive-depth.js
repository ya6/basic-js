const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth( arr ) {
    let d = 0;
    if (arr.length === 0) return 1;

    gofor(arr);

    function gofor(arr) {
    

        d++;

        let _arr = [];

        arr.forEach(element => {
            if (Array.isArray(element) ) {
                if(element.length === 0) element = 1;
                _arr.push(element);
            }
        });
       
        if (_arr.length > 0) {
            _arr = [].concat(..._arr);
            return gofor(_arr);
        } else if (_arr.length == 0) return d;

    }

    return d;

  }
};