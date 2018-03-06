var list = ["tiger" , "cat", "bear" , "bird"];
console.log(list[1]);

var mixedList = [1,"apples", true, function apple() {
	console.log("apple")
}];

// Remove banana from array

var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();

// Sort array in order

array.sort();

// Put "Kiwi" at the end of the array.

array.push("Kiwi");

//  Remove "Apples" from the array.

array.splice(0,1);

//  Sort the array in reverse order.

array.reverse();

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

array2[1][1][0];
