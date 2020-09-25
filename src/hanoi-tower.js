const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  const steps = Math.pow(2,disksNumber) - 1;
  const speed = Math.floor(1*60*60/turnsSpeed*steps);
  
  return {'turns': steps,
          'seconds': speed
};
};
