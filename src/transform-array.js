const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {


    try {
        (arr instanceof Array);

} catch (err) {
 
 console.error('Error');
}



    const _arr   = arr.slice(0);


    _arr.forEach((item, index) => {
        if(item ==='--discard-next') {
            _arr.splice(index,2);
        }
    });

    _arr.forEach((item, index) => {
        if(item ==='--discard-prev' && index > 0 ) {
            _arr.splice(index-1,2);
        } else if(item ==='--discard-prev' && index === 0 )
        _arr.splice(index,1);
    });

    _arr.forEach((item, index) => {
        if(item ==='--double-prev' && index > 0) {
            _arr.splice(index,1, _arr[index-1]);
        }  else if(item ==='--double-prev' && index === 0 )
        _arr.splice(index,1);
    });

    _arr.forEach((item, index) => {
        
        if(item ==='--double-next' &&  (_arr.length - 1) > index) {
            _arr.splice(index,1, _arr[index+1]);
        }  else if(item ==='--double-next' && (_arr.length - 1) === index )
        _arr.splice(index,1);
    });



    return _arr;
};
