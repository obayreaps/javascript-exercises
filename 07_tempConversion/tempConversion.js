const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32) * 5 / 9;
  if(!Number.isInteger(convertedTemp))
    return parseFloat(convertedTemp.toFixed(1));
  return convertedTemp;
};



const convertToFahrenheit = function(temp) {
  let convertedTemp = (temp * 9 / 5) + 32;
  if(!Number.isInteger(convertedTemp))
    return parseFloat(convertedTemp.toFixed(1));
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
