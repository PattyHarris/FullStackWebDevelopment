var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");

var resultField = document.getElementById("resultField");

var form = document.getElementById("percentFormCaculator");

// Use the "event" parameter to prevent the page from
// being refreshed.
form.addEventListener("submit", function(event) {

    if ( !numField1.value || !numField2.value ) {
        alert("Values cannot be empty.");
    }
    else {
        var n1 = parseFloat(numField1.value);
        var n2 = parseFloat(numField2.value);

        var result = 0;

        var selection = document.getElementById("selectionList").value;

        switch (selection) {
            case "Option1":
                result = (n1 / n2) * 100.0;
                break;
            case "Option2":
                result = n1 / (n2 / 100.0);
                break;
            case "Option3":
                result = (n2 / n1) * 100.0;
                break;
            case "Option4":
                result = (n2 * 100) / n1;
                break;
            case "Option5":
                result = (n1 / 100) * n2;
                break;
        }

        resultField.innerText = "Answer: " + result + "%";

        // Prevent page refresh()
        event.preventDefault();
    }
});

// Handle the list selection label text.
document.getElementById("selectionList").onchange = function() {
    var form = this.form;

    var label1 = document.getElementById("fieldLabel1");
    var label2 = document.getElementById("fieldLabel2");
    var label3 = document.getElementById("fieldLabel3");

    var placeHolder1 = document.getElementById("numField1");
    var placeHolder2 = document.getElementById("numField2");

    var selection = this.value;

    switch (selection) {
        case "Option1":
            label1.innerText = "";
            label2.innerText = "what % of";
            label3.innerText = "?";

            placeHolder1.placeholder = "Y";
            placeHolder2.placeholder = "X";
            break;
        case "Option2":
            label1.innerText = "";
            label2.innerText = "is";
            label3.innerText = "% of what?"

            placeHolder1.placeholder = "X";
            placeHolder2.placeholder = "Y";
            break;
        case "Option3":
            label1.innerText = "What % of";
            label2.innerText = "is";
            label3.innerText = "?";

            placeHolder1.placeholder = "X";
            placeHolder2.placeholder = "Y";
            break;
        case "Option4":
            label1.innerText = "";
            label2.innerText = "% of what is";
            label3.innerText = "?"

            placeHolder1.placeholder = "X";
            placeHolder2.placeholder = "Y";
            break;
        case "Option5":
            label1.innerText = "";
            label2.innerText = "% of";
            label3.innerText = "is what?"

            placeHolder1.placeholder = "Y";
            placeHolder2.placeholder = "X";
            break;
    }
}
