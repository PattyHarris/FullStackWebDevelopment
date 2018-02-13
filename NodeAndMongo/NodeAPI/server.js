// Import express and create the app.
var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}));

// Added for the tutorial on POST
var ingredients = [
    {
        "id": "1234",
        "text": "Eggs"
    },
    {
        "id": "2345",
        "text": "Milk"
    },
    {
        "id": "3456",
        "text": "Bacon"
    },
    {
        "id": "4567",
        "text": "Cheese"
    }
];


// Function to handle "get" requests to the base url
// Express will automatically convert the response into JSON.

app.get('/ingredients', function(request, response) {
    // Initial API tutorial
    // response.send('My first API');
    
    response.send(ingredients);
    
})

app.post('/ingredient', function(request, response) {
    var ingredient = request.body;
    
    if (!ingredient || ingredient.text === "") {
        response.status(500).send( {error: "Your ingredient cannot be empty."})
    }
    else {
        ingredients.push(ingredient);
        response.status(200).send(ingredient);
    }     
})

app.put('/ingredient/:ingredientID', function(request, response) {
    
    // The ID won't be empty since it's a required URL param.
    var ingredientID = request.params.ingredientID;
    var text = request.body.text;
    
    if ( !text || text === "") {
        
        response.status(500).send( {error: "The ingredient cannot be empty."})
        return;
    }
    
    var found = false;
    
    // Else, find the ID in the list and update the data
    for (var index = 0; index < ingredients.length; index++) {
        
        if (ingredients[index].id === ingredientID) {
            ingredients[index].text = text;
            found = true;
            break;
        }
    }
    
    if (found) {
        response.status(200).send(ingredients);
    }
    else {
        response.status(500).send( {error: "No match found for ingredient ID!"})
    }
})


// The "function" here is a callback function.
app.listen(3000, function() {
    console.log('First API running on port 3000');
})