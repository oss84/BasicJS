var database = [
	{
		username:"andy",
		password:"123"
	},

	{
		username:"Bob",
		password:"321"
	}, 

	{
		username:"Sally",
		password:"pass"
	}
];

var newsFeed = [
	{
		username:"bobby",
		timeline:"This FB is cool!"
	}, 
	{
		username:"Sally",
		timeline:"Javascript is soooo coool!"
	},

	{
		username:"Mitch",
		timeline:"Blaablaablaa"
	}


];

function isUserValid(username,password) {
		for (var i=0; i<database.length;i++) {
		if(database[i].username===username &&
			database[i].password===password) {
			return true;
		}
	}
			return false;
}



var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(username,password) {
	
	console.log(isUserValid(username,password));

	if (isUserValid(username,password)) {
		console.log(newsFeed);
	}else {
		alert("sorry, wrong username and password");
	}


}

signIn(userNamePrompt,passwordPrompt);