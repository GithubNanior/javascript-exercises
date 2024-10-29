const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((prev, current, index, array) => current + prev, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((prev, current, index, array) => current * prev, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let product = 1;
	for (let i = 2; i <= n; i++) {
    product *= i;
  };
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
