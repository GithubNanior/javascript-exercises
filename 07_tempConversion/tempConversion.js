function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9, 1;
};

function convertToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32, 1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
