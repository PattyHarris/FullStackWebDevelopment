# UltimateWeb Tutorial

## JS - Reference

1. In the first tutorial - the script was added to the body, which measn it's loaded when the page is loaded.

2. If you use Console.log(), use CMD + Alt + J to open the Chrome console - you can see any messages that are logged.

3. References:
    - W3Schools - quick reference.
    - MDN (Mozilla) - more detail given here.
    - jsbin.com - here if you turn off html and CSS, you can run JS code and see the output in the side panel console.

## JS - Comments and how to link scripts

1. Never use JS inline as we did with the first introduction index.hmtl.  

2. To link to a script, in the header add the script tag with a "src" specifier - add the learnToCode.js file to the project.

3. Comment out the embedded script code (using CMD+/) - if you don't include the script tag and enter CMD+/, it will add the "//" comment prefix to the highlighted code....note that comments for JS are different than comments for HTML.

4. Move the JS file to a new folder, javascript.  "src" for the script tag now has "javascript/learnToCode", since the path is relative to the index.html file.  Copy the prior JS to the new JS file.

5. Run the index.html from Finder (apparently bracket crashes?  Seems to work for me).  To open the Chrome console, use CMD+ALT+j

6. favicon error - from some SO postings, add the header tag:
<code>
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
</code>

## JS - Variable and Strings

Nothing new here - although strings can be single or double quoted.

Javascript will only keep variable contents around as long as they're needed.

## JS - Numbers

1. All JS numbers are stored as 64 bit floating point.

Nothing special here.

## JS - Comparison Operators

See HelloJavascript-4...nothing here of note.

=== checks both the value and the type -
e.g. 
var age = 23;
var myAge = "23"

if (age === myAge) {
    // Do something
}

Also, if you have one line of code, {} aren't needed.
e.g.
    if (age > 0) 
        var x = true;

## JS - Logical Operators

Nothing much here ...

!== is not equal to

## JS - Arrays

1. indexOf returns -1 on failure.

2. splice is used to remove an element from an array.
The function is also not supported in IE 7 or IE 8.

## JS - Loops

See the function-arrays.js file in the Downloaded 
folder as well for the JS that goes with this tutorial and the following couple of tutorials.

Nothing new here...

Array size = length - e.g.  
<code>
    var myArray = [1, 2, 3,4];
    var size = myArray.length;
</code>

## JS - Loops And Arrays

Exercise.

## JS -  Functions

1. Functions don't have to declare their return, e.g.
<code>
    function area(width, length) {
        return width * length;
    }
</code>

2. You can also not define the function name and then use the returned variable as a function.  For example:
<code>
    var transaction = function(priceOfSale) {
        // Some code here
    }
    
    // Use the returned variable as a function.
    transacton(10.00);
    
    // And then you could push the variable function into 
    // an array (for example).
    var allTransactions = [];
    allTransactions.push(transaction(12.00),
        transaction(15.00));
</code>

## JS - Objects

1. Objects are like Swift dictionaries - e.g. key,value pairs.

2. To create an object - here are 2 different ways:
<code>

    // First way.... literal object

    var student = {
        firstName: "Sally",
        lastName: "Smith",

        // Object method
        greeting: function() {
            return "Hello, my name is " + this.firstName;
        }
    }

    // OR

    var firstStudent = new Object();
    firstStudent.firstName = "Sally";
    firstStudent.lastName = "Smith";

    // OR

    var secondStudent = {};
    secondStudent.firstName = "John";
    secondStudent.lastName = "Douglas";

    // OR Best way - best practice is to capitalize
    // the class name?
    
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

        this.greeting = function() {
            return "Hello, my name is " + this.firstName;
        }
    }
    
    var s1 = new Student("Sally", "Smith");
    s1.greeting();
    
</code>

3. To enumerate all the keys and values - good for debugging.
<code>
    for (var key in s1) {
        console.log(s1[key]);
    }
</code>

## JS - Bind

1. Examples here tested using JSBin.com console.

2. This is the problem:
<code>
    this.car = "Rabbit";
    
    var myCar = {
        car: "Mini",
        getCar: function() {
            return this.car
        }
    }
    
    var storeGetCarForLater = myCar.getCar;
    
    console.log(storeCarForLater());
    
    // Come back later and console prints out Rabbit 
    
</code>

The problem here is that "this.car" refers to the top line of code.  We lost scope.

To get around this, use bind()

<code>
    var theRealGetCarFunction = storeGetCarForLaer.bind(myCar);
    
    // OR
    
    var anotherGetCarFunction = myCar.getCar.bind(myCar);
</code>

## JS - Percentage Calculator

### JS - Percentage Calculator - Setting up the Form

1. See the folder PercentageCalculator
2. Setup the form simply using some inputs - note that the script tag is in the "body" this time since the order of things is important when mixing HTML and JS.

### JS - Percentage Calculator - Grabbing Elements with JS

1. Test an element by setting the value as opposed to getting the value - e.g. numField1.value = "Test";

2. The H3 tag is accessed via the innerText property - e.g. resultField.innerText = "Test";

### JS - Percentage Calculator - Using Event Listeners

1. There's a difference between using the following 2 button types:
<code>
    <form>
        <input type="submit" value="Calculate">
    </form>
    <button onclick="onClickerHandler()">Calculate</button>
</code>

From Quora:
"submit" is linked to a form while "button" is a general button. In "submit", you can check whether the button was clicked to start processing a form in backend. Also "submit" button is automatically clicked when pressing "Enter" key while for the "button" you have to hard code it in javascript.

2. To catch the submit button, give the form an ID, in this case, "xIsWhatPercentOfy" and then you use addEventListener with the reserved word "submit" and a function name.  Here, Mark is using an inline function.

3. Make sure the fields have data, e.g. !numField1.value

4. You need to explicity convert the text fields to a number - we used parseFloat in case a float is entered.  There are other parsing functions - e.g. parseInt.

5. NOTE: every time you submit a page, is does a refresh, meaning that if we just tried to put the result in the text field, it will get overwritten.  To prevent this, pass a variable to the "function()" which you can call anything, but it's basically "the event".

Then use event.preventDefault() to prevent the page from being refreshed.

This isn't a problem if you use the "button" element.

### JS - Percentage Calculator - Algorithm and Prevent Default