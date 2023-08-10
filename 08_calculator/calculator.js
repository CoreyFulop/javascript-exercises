const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function([...numbers]) {
	return sumTotal = numbers.reduce((total, number) => total + +number, 0);
};

const multiply = function([...numbers]) {
  return totalMultiply = numbers.reduce((total, current) => total * +current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let result = 1;
  for (a; a > 1; a--) {
    result *= a;
  }
  return result;
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
