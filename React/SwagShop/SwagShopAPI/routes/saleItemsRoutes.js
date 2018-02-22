// Basic route setup
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: false }));

var saleItemsController =
    require('../controllers/saleItemsController');

/******************** Sale Items  *************************/

// POST handler for Sale Items - creates the list for the sale items
router.post('/sale-items', saleItemsController.saleItemsCreate);

// GET handler - returns the list of sale items including related 
// items
router.get('/sale-items', saleItemsController.saleItemsList);

// PUT handler - this is really bad REST syntax.
// Adds a product to the list of sale items.
router.put('/sale-items/product/add',
           saleItemsController.saleItemsAddProduct);

// PUT handler - Adds an item to the list of related
router.put('/sale-items/related/add',
           saleItemsController.saleItemsAddRelated);

// DELETE handler - removes an item from the list of sale items.
router.delete('/sale-items/product/delete', 
              saleItemsController.saleItemsDeleteProduct);

// DELETE handler - removes an item from the list of related items
router.delete('/sale-items/related/delete', 
              saleItemsController.saleItemsDeleteRelated);

/******************** Export *************************/
module.exports = router;