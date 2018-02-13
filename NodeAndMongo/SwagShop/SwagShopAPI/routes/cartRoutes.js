// Basic route setup
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: false }));

var cartController =
    require('../controllers/cartController');

/******************** Cart *************************/

// POST handler for Cart
router.post('/cart', cartController.cartCreate);

// GET handler - lists the content of the cart.
router.get('/cart', cartController.cartList);


// PUT handler - this is really bad REST syntax.
// It should be just /cart/product - adds an item to the
// cart.
router.put('/cart/product/add',
           cartController.cartAddProduct);

// DELETE handler - removes an item from the cart
router.delete('/cart/product/delete',
              cartController.cartDeleteProduct);

/******************** Export *************************/
module.exports = router;