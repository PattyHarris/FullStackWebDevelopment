// Basic controller setup.
var express = require('express');

// Although the variable db isn't used again, this line
// is important.
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');

// These variables make more sense capped - since we'll be
// instantiating them like classes - seel below.
var Product = require('../model/product');
var WishList = require('../model/wishlist');

/******************** Products *************************/

// POST handler for new products

exports.productCreate = function(request, response) {

    // This could be refactored as
    // var product = new Product(request.body);
    // OR
    // var product = new Product({title: request.body.title, price: request.body.price})
    var product = new Product();

    product.title = request.body.title;
    product.price = request.body.price;

    product.save(function(err, savedProduct) {
        if (err) {
            response.status(500).send({error: "Could not save product!"});
        }
        else {
            // The following could be also written as
            // response.send(savedProduct);
            // OR
            // response.json(savedProduct);
            response.status(200).send(savedProduct);
        }
    })
};

// GET handler

// Refactored from "app.get" to using the router here
// router.get('/products', function(request, response)
// and then setting up the functions this way...

exports.productList = function(request, response) {

    Product.find({}).exec( function(err, products) {

        if (err) {
            response.status(500).send({error: "Could not fetch products!"});
        }
        else {
            // console.log(products)
            response.status(200).send(products);
        }

    });

};
