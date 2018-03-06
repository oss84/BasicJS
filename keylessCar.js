function CheckAge(age) {
	if(Number(age)<18) {
		return ("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age)===18) {
		return ("Congratulations on your first year of driving. Enjoy the ride!");
	}else if (Number(age)>18) {
		return ("Powering On. Enjoy the ride!");
	}
}




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

CheckDriverAge();

var age = prompt("what is your age?");

if (Number(age)<18) {
	alert("Sorry, you are too young to drive this car. Powering off");
} else if (Number(age)===18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}else if (Number(age)>18) {
	alert("Powering On. Enjoy the ride!");
}


 var x = function (num1,num2) {
	if (num1>num2) {
		return "First argument was " + num1 + " and it was greater";
	} else if (num2>num1) {
		return "Second argument was " + num2 + " and it was greater";
	} else {
		return "Error";
	}
}


function calc(opr,num1,num2) {
	switch(opr) {
		case "+" : return num1+num2;
			break;
		case "-" : return num1-num2;
			break;
		case "/" : return num1/num2; 
			break;
		case "*" : return num1*num2;
			break;
	}
}