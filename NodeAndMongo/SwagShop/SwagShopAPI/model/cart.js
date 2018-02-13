var mongoose = require('mongoose');
var cartSchema = mongoose.Schema;

var cart = new cartSchema({
    products: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Product'
    }]
});

module.exports = mongoose.model("Cart", cart);