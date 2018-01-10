// Not used for the subject of Logical Operators.
//


// Following used for the lecture on arrays.

// Shows mixed values of positive and negative.
// You can also mix ints and strings, for example,
// but that's a bad idea.
var balances = [50.45, 4000.12, -300.50];

var studentNames = ["Timmy", "Janessa", "Arun"];

var naughtyList = [];
naughtyList.push(studentNames[0]);

var index = naughtyList.indexOf("Timmy");

// List has 1 element = Timmy
console.log(naughtyList);

// Remove the element from the array.
// This removes at the index for 1 element.
if (index > -1) {
    naughtyList.splice(index, 1);
}

// At this point the array is empty.
console.log(naughtyList);
