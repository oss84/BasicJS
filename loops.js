var todos = [
	"clean room",
	"brush teeth",
	"execise",
	"study javascript",
	"eat healthy"
];

var todosImportant = [
	"clean room!",
	"brush teeth!",
	"execise!",
	"study javascript!",
	"eat healthy!"
];


var todosLength=todos.length;

function logTodos(a,b) {
	console.log(a,b);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);


counterOne= 0; 

while(counterOne<50) {
	console.log(counterOne);
	counterOne++;
}


for(var i = 0;i < todosLength; i++) {
	todos.pop();
}

 

counterTwo=10;

do {
	console.log(counterTwo);
	counterTwo--;

} while (counterTwo > 0);