// Basic controller setup.
var express = require('express');

// Although the variable db isn't used again, this line
// is important.
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');

// These variables make more sense capped - since we'll be
// instantiating them like classes - seel below.
var Product = require('../model/product');
var SaleItems = require('../model/saleitems');

/******************** Sale Items *************************/

// POST handler for Sale Items

exports.saleItemsCreate = function(request, response) {
    var saleItems = new SaleItems();
    
    saleItems.save( function(err, savedSaleItems) {
        if (err) {
            response.status(500).send({error: "Could not save sale items list!"});
        }
        else {
            response.status(200).send(savedSaleItems);
        }
        
    });
};

// GET handler - returns the list of sale items including the
// related items list.

exports.saleItemsList = function(request, response) {
    
    // Here, the "path" referes the "products" in the SaleItems
    // model. And "model" refers to "Product" in the Product 
    // model definition (note that populate is a mongoose API).
    SaleItems.find({})
        .populate({path: 'products', model: 'Product'})
        .populate({path: 'relatedItems', model: 'Product'})
        .exec(function(err, saleitems) {
        
        if (err) {
            response.status(500).send({error: "Could not fetch sale items list!"})
        }
        else {
            response.status(200).send(saleitems);
        }
    });
        
};


// PUT handler - Add an item to the list of sale items.

exports.saleItemsAddProduct = function(request, response) {
    
    // Look for a single instance of the product by it's ID.
    Product.findOne( {_id: request.body.productId}, 
                    function(err, product) {
        if (err) {
            response.status(500).send({error: "Could not find product!"})
        }
        else {
            
            // First part here finds the sale items, then uses the 
            // "addToSet" to update the sale items.
            SaleItems.update({_id: request.body.saleItemsId}, 
                            {$addToSet: { products: product._id }}, 
                            function(err, saleItems) {
                
                if (err) {
                    response.status(500).send({error: 
                                               "Could not update sale items!"})
                }
                else {
                    // This didn't work, so Mark changed to
                    // just return a message...
                    // response.send(wishList);
                    response.status(200).send("Sale items updated!");
                }
            })
        }
        
    });
    
};

// PUT handler - Add an item to the list of related items in the
// sale items list.

exports.saleItemsAddRelated = function(request, response) {
    
    // Look for a single instance of the product by it's ID.
    Product.findOne( {_id: request.body.productId}, 
                    function(err, product) {
        if (err) {
            response.status(500).send({error: "Could not find product!"})
        }
        else {
            
            // First part here finds the wishlist, then uses the 
            // "addToSet" to update the wishlist.
            SaleItems.update({_id: request.body.saleItemsId}, 
                            {$addToSet: { relatedItems: product._id }}, 
                            function(err, saleItems) {
                
                if (err) {
                    response.status(500).send({error: 
                                               "Could not update related items!"})
                }
                else {
                    // This didn't work, so Mark changed to
                    // just return a message...
                    // response.send(wishList);
                    response.status(200).send("Sale items related items updated!");
                }
            })
        }
        
    });
    
};

// DELETE handler - removes an item from the list of sale items

exports.saleItemsDeleteProduct = function(request, response) {
    
    // Look for a single instance of the product by it's ID.
    Product.findOne( {_id: request.body.productId}, 
                    function(err, product) {
        if (err) {
            response.status(500).send({error: "Could not find product!"})
        }
        else {
            
            // First part here finds the cart, then uses the 
            // "pull" to remove the item from the cart.
            SaleItems.update({_id: request.body.saleItemsId}, 
                { $pull: { products: product._id } }, 
                    function(err, saleItems) {

                        if (err) {
                            response.status(500).send({error: 
                                                       "Could not update sale items!"})
                        }
                        else {
                            // This didn't work, so Mark changed to
                            // just return a message...
                            // response.send(cart);
                            response.status(200).send("Item removed from the list of sale items!");
                        }
                    })
        }
        
    });
    
};

// DELETE handler - removes an item from the list of related items

exports.saleItemsDeleteRelated = function(request, response) {
       
    // Look for a single instance of the product by it's ID.
    Product.findOne( {_id: request.body.productId}, 
                    function(err, product) {
        if (err) {
            response.status(500).send({error: "Could not find product!"})
        }
        else {
            
            // First part here finds the cart, then uses the 
            // "pull" to remove the item from the cart.
            SaleItems.update({_id: request.body.saleItemsId}, 
                { $pull: { relatedItems: product._id } }, 
                    function(err, saleItems) {

                        if (err) {
                            response.status(500).send({error: 
                                                       "Could not update sale items!"})
                        }
                        else {
                            // This didn't work, so Mark changed to
                            // just return a message...
                            // response.send(cart);
                            response.status(200).send("Item removed from the list of sale items!");
                        }
                    })
        }
        
    });
    
};

