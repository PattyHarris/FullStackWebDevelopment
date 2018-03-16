// Basic controller setup.
var express = require('express');

// Although the variable db isn't used again, this line
// is important.
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');

// These variables make more sense capped - since we'll be
// instantiating them like classes - seel below.
var Product = require('../model/product');
var Cart = require('../model/cart');

/******************** Cart *************************/

// POST handler for Cart
exports.cartCreate = function(request, response) {

    var cart = new Cart();
    cart.save( function(err, savedCart) {
        if (err) {
            response.status(500).send({error: "Could not save cart!"});
        }
        else {
            response.status(200).send(savedCart);
        }

    });
};

// GET handler

exports.cartList = function(request, response) {

    // Here, the "path" referes the "products" in the Cart
    // model. And "model" refers to "Product" in the Product
    // model definition.
    Cart.find({})
        .populate({path: 'products', model: 'Product'})
        .exec(function(err, carts) {

        if (err) {
            response.status(500).send({error: "Could not fetch cart!"})
        }
        else {
            response.status(200).send(carts);
        }
    });

};


// PUT handler - this is really bad REST syntax.
// It should be just /cart/product

exports.cartAddProduct = function(request, response) {

    /*
    console.log("request productID: " + request.body.productId);
    console.log("request cartID: " + request.body.cartId);
    response.status(200).send("Test add");
    return;
    */

    // Look for a single instance of the product by it's ID.
    Product.findOne( {_id: request.body.productId},
                    function(err, product) {
        if (err) {
            response.status(500).send({error: "Could not find product!"})
        }
        else {

            // First part here finds the cart, then uses the
            // "addToSet" to update the cart.
            Cart.update({_id: request.body.cartId},
                            {$addToSet: { products: product._id }},
                            function(err, cart) {

                if (err) {
                    response.status(500).send({error:
                                               "Could not update cart!"})
                }
                else {
                    // This didn't work, so Mark changed to
                    // just return a message...
                    // response.send(cart);
                    response.status(200).send("Cart updated!");
                }
            })
        }

    });

};

// DELETE handler - removes an item from the list of products in the
// cart.

exports.cartDeleteProduct = function(request, response) {

    // Look for a single instance of the product by it's ID.
    Product.findOne( {_id: request.body.productId},
                    function(err, product) {
        if (err) {
            response.status(500).send({error: "Could not find product!"})
        }
        else {

            // First part here finds the cart, then uses the
            // "pull" to remove the item from the cart.
            Cart.update({_id: request.body.cartId},
                { $pull: { products: product._id } },
                    function(err, cart) {

                        if (err) {
                            response.status(500).send({error:
                                                       "Could not update cart!"})
                        }
                        else {
                            // This didn't work, so Mark changed to
                            // just return a message...
                            // response.send(cart);
                            response.status(200).send("Item removed from the cart!");
                        }
                    })
        }

    });

};
