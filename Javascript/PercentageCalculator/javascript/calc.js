var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");

var resultField = document.getElementById("resultField");

var form = document.getElementById("xIsWhatPercentOfy");

// Use the "event" parameter to prevent the page from
// being refreshed.
form.addEventListener("submit", function( event ) {

    if ( !numField1.value || !numField2.value ) {
        alert("Values cannot be empty.");
    }
    else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        var result = (x / y) * 100.0;
        resultField.innerText = "Answer: " + result + "%";

        // Prevent page refresh()
        event.preventDefault();
    }
});

