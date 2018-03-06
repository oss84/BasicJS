function CheckAge(age) {
	if(Number(age)<18) {
		return ("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age)===18) {
		return ("Congratulations on your first year of driving. Enjoy the ride!");
	}else if (Number(age)>18) {
		return ("Powering On. Enjoy the ride!");
	}
}

CheckAge(15);


 var CheckDriverAge2 = function() {
	var age=prompt("What is your age?");

	if(Number(age)<18) {
		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age)===18) {
		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}else if (Number(age)>18) {
		alert("Powering On. Enjoy the ride!");
	}


}

CheckDriverAge2();

 // Start of IF/ELSE STATEMENT

var age = prompt("what is your age?");

if (Number(age)<18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age)===18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}else if (Number(age)>18) {
	alert("Powering On. Enjoy the ride!");
}

// END of IF/ELSE STATEMENT

 var x = function (num1,num2) {
	if (num1>num2) {
		return "First argument was " + num1 + " and it was greater";
	} else if (num2>num1) {
		return "Second argument was " + num2 + " and it was greater";
	} else {
		return "Error";
	}
}


x(1,15);

function multiply (a,b,c) {
	var res = a*b*c;
	alert(res);

}

multiply(2,2,2);

// switch statement inside a function below


function fruits (fruit) {
	var fruit; 
		switch(fruit) {
			case 'Oranges':
				return "Oranges are 5€ per kg";
				break;
			case 'Bananas':
				return "Bananas are 2€ per kg";
				break;
			case 'Apples':
				return "Apples are 4€ per kg";
				break;	
			case 'Tangerines':
			case 'Mangoes':
				return "Tangerines and Mangoes are 2.5€ per kg";
				break;
				default:
				return "We are out of " + fruit + ".";	
		}
}