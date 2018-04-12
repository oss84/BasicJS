console.log("print all number between -10 and 19");

var num = -10;


while (num>=-10 && num<=19) {
	console.log(num);
	num++;
}

console.log("print all even numbers between 10 and 40"); 

var x = 10; 

while(x <= 40) {
	if (x % 2 ===0) {
		console.log(x);
	}
	x++;
}

console.log("print all odd numbers between 300 and 333");

var y = 300;

while (y <= 333) {
	if(y % 2 !== 0) {
		console.log(y);
	}
	y++;
}

console.log("print all numbers divisible by 5 and 3 between 5 and 50");

var z = 5;

while(z>=5 && z<=50) {
	if (z % 5 === 0 && z % 3 === 0) {
		console.log(z);
	}
	z++;
}

