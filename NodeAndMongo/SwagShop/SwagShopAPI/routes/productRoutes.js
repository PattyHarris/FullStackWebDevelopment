// Basic route setup
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: false }));

var productController = 
    require('../controllers/productController');

/******************** Products *************************/

// POST handler for new products
router.post('/product',
            productController.productCreate);

// GET handler 
router.get('/products', productController.productList);

/******************** Export *************************/
module.exports = router;