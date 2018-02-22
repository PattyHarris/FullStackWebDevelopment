/* Import the color module */
var colors = require('colors');

/* First some yellow text */
console.log("First some yellow text".yellow)

/* Underline yellow text */
console.log("Underline that text".yellow.underline);

/* Bold and red text */
console.log("Make it bold and red".red.bold);

/* Rainbow text */
console.log("Doube Rainbows All Day Long".rainbow);

/* Not sure about this...*/
console.log("Drop the bass".trap);

console.log("Drop the rainbow bass".trap.rainbow);

console.log("Chains are also cool".bold.italic.underline.red);

console.log("So ".green + "are".underline + " " + "inverse".inverse + "styles!".yellow.bold);

console.log("Zebras are so fun!".zebra);

// Strkethrough doesn't work on macOS terminals - as noted
// in the documentation.
console.log("This is " + "not".strikethrough + " fun.");

console.log('Background color attack!'.white.bgBlack)

console.log("Use random styles on everything!".random);

console.log("America, Heck Yeah!".america);

