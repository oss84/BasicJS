var age = prompt("What is your age?");

if (age < 0) {
	console.log("Error, age cannot be a negative number");
} else if (age==21) {
	console.log("Happy 21st birthday");
} else if (age % 2 !==0) {
	console.log("Your age is odd");
} else if (age % Math.sqrt(age)===0) {
	console.log("Perfect square!");
}

