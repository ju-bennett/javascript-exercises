//Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:

const convertToCelsius = function(fahrenheit) {
  let number = (fahrenheit - 32) * 5 / 9;
  number = Math.round(number * 10) / 10;
  return number;
};

const convertToFahrenheit = function(celsius) {
  let number = (celsius * 9 / 5) + 32;
  number2 = Math.round(number * 10) / 10;
  return number2;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
