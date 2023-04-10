function outerFunction(num1) {
	return function(num2) {
		return num2 + num1;
	}
}

let n1 = +prompt('Enter first number');
let n2 = +prompt('Enter second number');

let innerFunction = outerFunction(n1);
console.log(innerFunction(n2));