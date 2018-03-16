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

/******************** WishLists *************************/

// POST handler for WishLists

exports.wishListCreate = function(request, response) {
    var wishList = new WishList();
    wishList.title = request.body.title;

    wishList.save( function(err, savedWishList) {
        if (err) {
            response.status(500).send({error: "Could not save wishlist!"});
        }
        else {
            response.status(200).send(savedWishList);
        }

    });
};

// GET handler
// router.get('/wishlists', function(request, response) {

exports.wishListList = function(request, response) {

    // Here, the "path" referes the "products" in the WishList
    // model. And "model" refers to "Product" in the Product
    // model definition.

    WishList.find({})
        .populate({path: 'products', model: 'Product'})
        .exec(function(err, wishlist) {

        if (err) {
            response.status(500).send({error: "Could not fetch wishlist!"})
        }
        else {
            response.status(200).send(wishlist);
        }
    });

    /* Refactored to return the data for the products
       listed in the wishlist.
    WishList.find({}, function(err, wishlists) {

        if (err) {
            response.status(500).send({error: "Could not fetch wishlists!"})
        }
        else {
            response.status(200).send(wishlists);
        }

    });
    */

};


// PUT handler - this is really bad REST syntax.
// It should be just /wishlist/product
// router.put('/wishlist/product/add', function(request, response) {

exports.wishListAddProduct = function(request, response) {

    // Look for a single instance of the product by it's ID.
    Product.findOne( {_id: request.body.productId},
                    function(err, product) {
        if (err) {
            response.status(500).send({error: "Could not find product!"})
        }
        else {

            // First part here finds the wishlist, then uses the
            // "addToSet" to update the wishlist.
            WishList.update({_id: request.body.wishListId},
                            {$addToSet: { products: product._id }},
                            function(err, wishList) {

                if (err) {
                    response.status(500).send({error:
                                               "Could not update wishlist!"})
                }
                else {
                    // This didn't work, so Mark changed to
                    // just return a message...returning the product DOES work,
                    // which is better since you don't want to send back the whole list?
                    // Couldn't find a good answer online about this...
                    // response.send(wishList);
                    response.status(200).send(product);
                }
            })
        }

    });

};

// DELETE handler - removes an item from the wishlist.

exports.wishListDeleteProduct = function(request, response) {

    // Look for a single instance of the product by it's ID.
    Product.findOne( {_id: request.body.productId},
                    function(err, product) {
        if (err) {
            response.status(500).send({error: "Could not find product!"})
        }
        else {

            // First part here finds the wishlist, then uses the
            // "pull" to remove the item from the cart.
            WishList.update({_id: request.body.wishListId},
                { $pull: { products: product._id } },
                    function(err, wishList) {

                        if (err) {
                            response.status(500).send({error:
                                                       "Could not update wishlist!"})
                        }
                        else {
                            // This didn't work, so Mark changed to
                            // just return a message...
                            // response.send(wishlist);
                            // As above, returning the product removed.
                            response.status(200).send(product);
                        }
                    })
        }

    });

};
