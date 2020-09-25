const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if  (isNaN(sampleActivity))  return false;
    if (typeof(sampleActivity) !=='string' || sampleActivity ==='' ||  sampleActivity ===' '  || sampleActivity > 15 || sampleActivity <=0 ) return false; 
  
    const t = Math.log(MODERN_ACTIVITY/sampleActivity)*8267;
    return Math.round(t);
};
