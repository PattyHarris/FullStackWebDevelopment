// Loop from 0 to 15, printing whether the
// given number is odd or even

for (var index = 0; index < 15; index ++) {
    var isEven = index % 2 == 0;
    if (isEven) {
        console.log(index + " is even");
    }
    else {
        console.log(index + " is odd");
    }
}

// Loop to print *'s
for (var i = 0; i < 5; i ++) {

    var outputStr = "";
    for (var j = 0; j < i + 1; j ++) {
        outputStr += "* ";
    }
    console.log(outputStr);
}

// Another loop where if the number is multiple of 3,
// print "Code", multiple of 5 print "Monkey" and if
// mulitple of both, print CodeMonkey - else just print the
// number.

for (var number = 0; number < 100; number ++) {

    var mod3 = "";
    var mod5 = "";

    var outputIndex = true;

    if (number % 3 == 0) {
        mod3 = "Code";
        outputIndex = false;
    }

    if (number % 5 == 0) {
        mod5 = "Monkey";
        outputIndex = false;
    }

    if (outputIndex == true) {
        console.log(number);
    }
    else {
        console.log(mod3 + mod5);
    }
}
