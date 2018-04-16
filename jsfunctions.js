//Write a function that returns true if the passed argument is even, otherwise return false

function isEven(num) {
	if(num % 2 === 0) {
		return true;
	}else {
		return false;
	}
}

function isEven(num) {
	return num % 2 === 0;
}

// Write a function which takes a single numeric argument and returns the factorial of that number

function factorial(num) {
	var result = 1;
	for(var i = 2; i<= num; i++) {
		result*=i;
	}
	return result;
}

// Write a function which takes a single kebab-cased string argument and returs the snake_cased version 

function kebabToSnake(str) {
	var newStr = str.replace(/-/g, "_");
	return newStr;
}