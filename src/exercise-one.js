const { VISUALNUTSNUMBERS } = require('../config/default')

function isVisualNuts(inputNumber) {
  if(inputNumber === 0) return inputNumber;

  if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
    return 'Visual Nuts';
  }

  if (inputNumber % 3 === 0) {
    return 'Visual';
  }

  if (inputNumber % 5 === 0) {
    return 'Nuts';
  }
  
  return inputNumber;
}

for (var i = 0; i < (VISUALNUTSNUMBERS + 1); i++) {
  console.log(isVisualNuts(i));
}

module.exports = {
  isVisualNuts
}

