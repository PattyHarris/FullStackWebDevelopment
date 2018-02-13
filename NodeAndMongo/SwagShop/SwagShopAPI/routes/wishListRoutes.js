// Basic route setup
var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: false }));

var wishListController =
    require('../controllers/wishListController');

/******************** WishLists *************************/

// POST handler for WishLists
router.post('/wishlist', wishListController.wishListCreate);

// GET handler 
router.get('/wishlists', wishListController.wishListList);


// PUT handler - this is really bad REST syntax.
// It should be just /wishlist/product
router.put('/wishlist/product/add',
           wishListController.wishListAddProduct);

/******************** Export *************************/
module.exports = router;