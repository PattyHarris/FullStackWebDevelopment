# UltimateWeb Tutorial

## Node, Mongo, and REST APIs

### Installing Node on macOS

1. Already installed, so I needed to update it:
<code>
> brew update
> brew upgrade node
> npm install -g npm
</code>

2. To run the shell,
<code>
> node
</code>

3. Mark uses "vim" to edit on the terminal:
     - use "i" for insert
     - ESC + ESC to get to the ":"
     - "x" to save and exit

4. CMD + K clears the terminal window

5. To run a JS using node - assuming you have a js file named "temp" - this will show you errors you may have as well.
<code>
> node temp.js
</code>

### All about JSON (Javascript Object Notation)

1. Added the JSON View extension (NOT JSON Viewer) extension to translate JSON output in Chrome...

2. Postman is another Chrome extension that might be useful (instead of using curl).

### Basics of Node

1. Testing using a file, test.js -> nodeTest.js - see the folder JSON.  To test with node (again):
<code>
> node nodeTest.js
</code>

2. NPM: Node package manager.  For example, you could install the package (from the npm website) readline-sync with ("require" is like an import):
<code>
> npm install readline-sync
</code>

Then, in the JS file:
<code>
var rs = require('readline-sync');
.
.
.
var name = rs.question('What is your name?');
console.log("Your name is: " + name);

</code>

The prompt and response then appear on the console when you run (assuming I had installed the package):
<code>
> node nodeTest.js
</code>

### Node Modules

1. This section shows how to create and "require" your own node modules.

2. Create 2 files, print.js and app.js.

3. We added a simple print function to print.js and then imported it in app.js - when you import your own modules, you need to use a path, e.g. "./print" - no extension is needed since .js is assumed.  When you use React, you'll need to specify ./print.jsx

4. Importing a module also requires that you know what you're importing - meaning you sort of need to know what the code is that you're importing.  

5. To run this test,
<code>
> node app.js
</code>

### Exercise: Mastering Node Modules

1. Two exercises.  One to create and export some calculator functions.  The second exercises installs an NPM package - color - and then uses some of the APIs.

### Building Your First API

1. Tutorial uses a first-API folder -> NodeAPI

2. Create a file, server.js

3. From the terminal, in this folder, run the following to initialize the folder to work with npm manager.
<code>
> npm init
</code>

4 "Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications."  We're using Express to handle web requests.

5. To install:
<code>
> node install --save express
</code>

The "--save" option adds a dependency to the package.json file.  What this means that if we remove the install node_modules folder, anyone downloading our API, could run "npm install" and npm would re-install all the dependencies (and therefore re-install express).

The caret next the version means it's the latest version of express.

2. To create an app, it's a simple matter of calling express():
<code>
var express = require("express");
var app = express();
</code>

3. Here, the forward slash means anything coming into the base URL - the request comes into the function here and is handled in the closure.
<code>
    app.get('./', function(request response) {

    })
</code>

4. You must send back a response - e.g. 404 or whatever.

5. server.js creates an "app" which then registers a get request listener on port 3000.  To test, on the terminal,
<code>
> node server.js
</code>

This prints out the console.log "First API running on port 3000".

Then, from the browser, localhost:3000 which renders "MyFirst API" on the browser page.

6. You can register other request types or endpoints and then use those endpoints from the browser.  To use this middleware, we needed to add the following:
<code>
    var bodyParser = required('body-parser');
    app.use(bodyParser.json());
    app.use(bodyParse.urlencoded({extended: false}));
</code>

See stackoverflow, but basically extended=false means you can't POST nested objects.  If it's true, the data is parsed with the "qs library", otherwise,  it's parsed using the querystring library.

The parameters passed into urlencoded is called "destructuring assignment".

### Postman, GET & POST Requests

1. In this tutorial, add to the last tutorial with the addition of a array of ingredients, set in JSON format.

2. To handle JSON data (sending and receiving), install body-parse (npm).

Now, when you run the server, the list of ingredients is output to the browser.

3. To test POST, install "postman" - to test a GET, use http://localhost:3000 in the URL - you'll see the list of ingredients.

4. In successful POST response, it's typical to return back the data that was send - here we're returning back the ingredient that was sent.

5. In postman, click the "+" to create a new tab.  Set the request type to POST, click on "Body" and select the "raw" option - this allows us to type the body in as JSON -> in the last dropdown, pick JSON (instead of "text");

6. Add the following to the text window and click "Send".
<code>
{
	"id": "5678",
	"text": "Butter"
}
</code>

Then when you refresh the webpage, it will show the additional item in the list.

### URL Parmeters and Delete Requests

1. This tutorial also handles PUT.

2. Refactor the API's to use:
GET: /ingredients
POST: /ingredient
PUT: /ingredient/:ingredientID
DELETE: /ingredient

3. In the PUT handler, we didn't need to test for the ID since it's a required URL param.  

4. Instead of CTRL+C the server each time a change is made, install "nodemon" globally.  Then run nodemon instead of node.

5. The ":" in the PUT API, e.g. "/ingredient/:ingredientID", indicates that the ID is a URL parameter.

6. In postman, the URL then becomes:
<code>
http://localhost:3000/ingredient/4567
</code>

Add the text that will change as in the POST, but selecting Body, raw, and JSON:
<code>
{
    text: "Ham"
}
</code>

### Exercise: Creating a Node Calculator

NodeJS Calculator

Using node and the NPM package readline-sync create a simple calculator.
	- When the program runs it will show the text "Please enter a number"
	- After the number is entered it will say, "Please enter another number"
	- After the second number is entered show a prompt that says, "Please enter an operator (+, - , / , * )"
	- The user will enter an operator. Once that operator is entered the result of the operation will be printed to the screen.

### Installing MongoDB on macOS

1. See the online docs for details:
https://docs.mongodb.com/getting-started/shell/tutorial/install-mongodb-on-os-x/

2. The recommended way to install is using brew - e.g. not the curl method.

3. To install:
<code>
> brew install mongodb
</code>

This assumes the --openssl option

The following is output to the terminal:

"A CA file has been bootstrapped using certificates from the SystemRoots keychain. To add additional certificates (e.g. the certificates added in the System keychain), place .pem files in
  /usr/local/etc/openssl/certs

and run
  /usr/local/opt/openssl/bin/c_rehash

This formula is keg-only, which means it was not symlinked into /usr/local, because Apple has deprecated use of OpenSSL in favor of its own TLS and crypto libraries.

If you need to have this software first in your PATH run:
  echo 'export PATH="/usr/local/opt/openssl/bin:$PATH"' >> ~/.bash_profile

For compilers to find this software you may need to set:
    LDFLAGS:  -L/usr/local/opt/openssl/lib
    CPPFLAGS: -I/usr/local/opt/openssl/include
"

4. After installation, you may need to create a db folder under /data if there isn't one there already - it must have read and write permissions:
<code>
> mkdir -p /data/db
> chmod ugo+rwx /data/db
</code>

5. If the "mongod" command isn't found, you can use the "export = PATH" variable as noted in the documentation.

### Working with the Mongo Shell

1. See the following online documentation:
https://docs.mongodb.com/getting-started/shell/introduction/

2. No pre-definition of tables is required.  It's a NoSQL database format.

3. To run the shell, you first need to run the server - so from a separate tab, run mongod - your computer then acts as a server running mongodb.  Then in another tab, run mongo.

4. List of DB's
<code>
> show dbs
</code>

5. Create a new DB - which doesn't create anything until you add something to it.
<code>
> use learning-mongo
</code>

6. To add a document to a collection - here our document is called "products" - no other command is need to start adding a new document:
<code>
> db.products.insert({"productName":"Red Car", "price":12.59, "salePrice":5.00})
</code>

If you then run "show collections", it will list "products"
To list all products:
<code>
> db.products.find()
</code>

Or, use the pretty() function - e.g. db.products.find().pretty()

7. There's no "optional" or "required" fields as in SQL, so you can choose to add the field or not - the danger is of course, that it allows you to add anything with any name....

8.  You should use some 3rd party frontend to interact with Mongodb (instead of the terminal) - later see tutorial using mongoose - see http://mongodb-tools.com for a list of mongodb applications.  Note that mongoose allows for object modeling and isn't a "front end" per se.  TBD: MongoDB Compass - might be worth a try.

### Searching for Documents

1. To search by ID - something in the code below causes atom.io to comment out the rest of this readme...using the apostrophe's instead of the "code" tag..

```
> db.products.find({"_id":ObjectId("5a77d1c3f29d3b3d3c382209")})
{ "_id" : ObjectId("5a77d1c3f29d3b3d3c382209"), "productName" : "Blue Car", "price" : 10.44 }

```

2. To find a document using some other attribute is the same, e.g.
<code>
>db.products.find({"salePrice":5})
</code>

To return the first hit, use "findOne()".

3. To update:
<code>
> db.products.update({"productName":"Red Car"}, {$set:{"price":3.59}})
</code>

The "$set" is a mongodb update operator.  See the online documentation:
https://docs.mongodb.com/manual/reference/operator/update/

There's also other types of operators - such as $lt or $gt...

### Deletions and Documentation

1. To remove an item:
<code>
> db.products.remove({"productName":"Pink Car"})
</code>

2. To remove just one from a criteria,
<code>
> db.products.remove({"productName":"Pink Car"}, {justOne: true})
</code>

#### Swag Shop API

#### Project Creation

1. Create server.js.  From the terminal, cd into the API folder. Run "npm init" to start setting up the node environment:
<code>
> npm init
> npm install --save body-parser
> npm install --save express
> npm install --save mongoose
</code>

2. Setup server.js with the basic setups - this set of things could be uploaded to github and then downloaded for each project:
<code>

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = required('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false }));

// Start the server
app.listen(3000, function() {
    console.log("Swap Shop API running on port 3000...");
})

</code>

3. Run the server using nodemon:
<code>
> nodemon server.js
</code>

4. To connect to the mongo database (which we haven't setup yet) - this shouldn't have worked, but even when I killed the running mongo dataase, there were no errors on the server...
<code>
    var db = mongoose.connect('mongodb://localhost/swag-shop');
</code>

Hint: to kill all mongo databases
<code>
> killall mongod
</code>

Anyway, make sure the mongo DB is running by running "mongod" in another tab.

5. Mark uses a node version manager (nvm) since different apps required different versions - so he runs his nodemon like this:
<code>
> nvm use 4.2.4
> nodemon server.js
</code>

6. To make sure that everything is working, run mongo in another tab and run the "show dbs" command.

#### Creating the Models

1. The Swag Shop has a list of products and wish lists.  This implies that we need to add products to the list of products as well as add items to wish lists.
To start the modeling process, create a folder called "model".

2. Starting at the lowest level in the model, add a file product.js.  Import mongoose.  Setup the schema - my variable names are not the same as Mark's for clarity.

3. To export the model schema - you specify the model name and schema:
<code>
module.exports = mongoose.model('Product', product);
</code>

4. Setup the wishlist schema - create a file wishlist.js and add the mongoose and schema setup.  This schema needed one additional item - this is the automatic ID for the object.
<code>
var objectId = mongoose.Schema.Types.ObjectId;
</code>

5. The title in this case has options = "title: String" is the same as "title: {type:String}".   To set a default value, title is given a default string value:
<code>
    title: {type: String, default: "Wish List"}
</code>

You can also specify "required" as an option.

6. The wishlist has a list of products stored as Mongo object IDs - Mark used just "ObjectId" - I needed the entire class prefix:
<code>
    products: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}]
</code>

7. Import both the Product and WishList in server.js

#### Posting Products

1. Add a POST handler to server.js for inserting new proudcts.

2. When you call save, the function enclosure returns the saved object:
<code>
    product.save(function(err, savedProduct) {

    })
</code>

3. On save, return the new product - this is especially critical on mobile, so that the app doesn't need to refresh the whole list to get the newly created ID.

4. response.status(200) is the default - so we could have just used response.send(savedProduct);  This is also the same as response.json(savedProduct);

5. To test, use Postman.  Set it to POST.  The url is http://localhost:3000/product.  The body contains (set to raw and JSON format):
<code>
    {
        "title": "Vault Boy Bobble Head",
        "price": 23.99
    }
</code>

This didn't work initially - I was missing the "db connect" line in server.js.

6. Always exit out of the mongo shell - it can corrupt your data if left open.

#### Fetching Products

1. Mark did the find this way - no call to exec()
<code>
    Product.find({}, function(err, products) {

        if (err) {
            response.status(500).send({error: "Could not fetch products!"})
        }
        else {
            console.log(products)
            response.status(200).send(products);
        }

    });

</code>

2. The call to "find" is asychronous, which means this generally will fail:
<code>
    var myProds:
    Product.find({}, function(err, products) {

        myProds = products;
        if (err) {
            response.status(500).send({error: "Could not fetch products!"})
        }
        else {
            // console.log(products)
            // response.status(200).send(products);
        }

    });

    // Do something with myProds, thinking it has the
    // value of products.
    console.log(myProds);
    response.status(200).send(myProds);

</code>


#### Exercise: Extending the API

1. This doesn't make sense...from the express documentation: Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

2. I suppose the idea here is to create a separate "route" file to modularize the REST endpoints.  The routes defined in swagShopRoutes.js.  Then sever.js is fairly minimal.

3. Use "router" defined instead of "app" and then make sre (very important) to export the router at the bottom of the routes file.  See the Mozilla documentatino - using this, the files are broken into productRoutes.js and wishlistRoutes.js.

4. The second part of the refactor is to specify only the routes in the route files and then the actual function implementation in the controllers folder files - create a new folder controollers.  In this folder, add a productController.js and wishListContoller.js file.  These will contain the function implementations.  Along with that, add to the top of each route file has their respective controller import, e.g. for the productRoute.js:
<code>
    var productController = require('../controllers/productController');
</code>

5. The middleware "use" code had to be in each of the routes files - so the bodyparse middleware is added on top of the router middleware?  

6. Finished the exercise with the cart and sale-items endpoints.  All working.

#### Populating Data

1. Setup a POST to handle new wishlists.

2. Test on postman using http://localhost:3000/wishlist, where the JSON:
<code>
    {
        "title": ""My List Of Favorites"
    }
</code>

3. Setup the GET request - I use /wishlists for my endpoint.

4. Add a PUT handler to update the wishlist with a product.

The REST endpoint is wrong - but no matter.  It assumes the client sends the ID of the product in the request.

Note that in the PUT handler, "products" is specified in the WishList schema.  "product" is defined by the "findOne" call in the beginning of this handler.

5. To test in PostMan, use on of the ObjectId listed in the GET (or from the Mongo shell, run a "find().pretty()).  Use the endpoint http://localhost:3000/wishlist/product/add with the body set to:
<code>
{
	"productId": "5a7cd851cd6fce05b35fcc7e",
	"wishListId": "5a7ce3e115fe29068baa99ce"
}
</code>

6. It didn't send back the wishlist - this was explained very well.

7. Refactor the GET wishlist endpoint to return the actual product data in the products array.  For each product ID, get the actual data for that product and return that in the wishlist returned to the client.
