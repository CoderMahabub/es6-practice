const add = (first, second) => first + second;
const fullName = (firstName, lastName) => firstName + ' ' + lastName;

const multiply = (a, b) => a * b;
const result = multiply(5, 5);
// console.log(result);

// No Parameter Arrow Function
const getPie = () => 3.1416;

const double = (num) => num * 2;
const fiveTimes = (num) => num * 5;

// multiline arrow function
const doMath = (x, y, z) => {
	const xPlusY = x + y;
	const yPlusZ = y + z;
	const result = xPlusY + yPlusZ;
	return result;
};
