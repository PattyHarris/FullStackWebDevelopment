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

// DELETE handler - added for convenience...and also needed
// for the last exercise.
// http://localhost:3004/wishlist/product/delete.
// The body:
// {
// 	"productId": "5a7cd851cd6fce05b35fcc7e",
// 	"wishListId": "5a80a6047ad67012f16f31a0"
// }
router.delete('/wishlist/product/delete',
           wishListController.wishListDeleteProduct);

/******************** Export *************************/
module.exports = router;
