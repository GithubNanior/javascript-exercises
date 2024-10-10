function convertToCelsius(fahrenheit) {
  return roundToDecimal((fahrenheit - 32) * 5 / 9, 1);
};

function convertToFahrenheit(celsius) {
  return roundToDecimal(celsius * 9 / 5 + 32, 1);
};

function roundToDecimal(number, decimal) {
  return Math.round(number * 10 ** decimal) / 10 ** decimal;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
