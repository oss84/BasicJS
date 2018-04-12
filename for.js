console.log("Print all numbers between -10 and 19 by using a for loop"); 

for (var i = -10;i < 20; i++) {
	console.log("The number is" + " " + i);
}

console.log("Print all even numbers between 10 and 40 by using a for loop"); 

for(var i = 10; i < 41; i++){
	if (i % 2 === 0) {
		console.log("The number is" + " " + i);
	}
}

console.log("Print all odd numbers between 300 and 333 by using a for loop");

for(var i = 300; i < 334; i++) {
	if(i % 2 !== 0) {
		console.log("The number is" + " " + i);
	}
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50 by using a for loop");

for(var i = 5; i < 51; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log("The number is" + " " + i);
	}
}

var str = "xJxaxvxaxsxcxrxixpxt";

for (var k = 1; k < str.length; k+=2) {
		console.log(str[k]);
}
