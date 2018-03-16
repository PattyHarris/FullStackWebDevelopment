// Basic server setup
var express = require('express');
var app = express();

var productRoutes = require('./routes/productRoutes');
var wishListRoutes = require('./routes/wishListRoutes');
var cartRoutes = require('./routes/cartRoutes');
var saleItemsRoutes = require('./routes/saleItemsRoutes');

// Not to be confused, the slash here is our starting
// REST path...so if I had used /routes, for example, all
// the endpoints would have been /routes/products...
app.use('/', productRoutes);
app.use('/', wishListRoutes);
app.use('/', cartRoutes);
app.use('/', saleItemsRoutes);

// Start the server
app.listen(3006, function() {
    console.log("Swap Shop API running on port 3006...");
});
