// Basic server setup
var express = require('express');
var app = express();

var productRoutes = require('./routes/productRoutes');
var wishListRoutes = require('./routes/wishListRoutes');
var cartRoutes = require('./routes/cartRoutes');
var saleItemsRoutes = require('./routes/saleItemsRoutes');

// Allow all requests from all domains & localhost
// This was part of the downloaded API files, but not
// part of any of the tutorials.
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});


// Not to be confused, the slash here is our starting
// REST path...so if I had used /routes, for example, all
// the endpoints would have been /routes/products...
app.use('/', productRoutes);
app.use('/', wishListRoutes);
app.use('/', cartRoutes);
app.use('/', saleItemsRoutes);

// Start the server - for this part of the tutorial,
// we're listening on port 3004.
app.listen(3004, function() {
    console.log("Swap Shop API running on port 3004...");
});

