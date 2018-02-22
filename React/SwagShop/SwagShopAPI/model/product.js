var mongoose = require('mongoose');
var productSchema = mongoose.Schema;

var product = new productSchema({
    title: String,
    price: Number,
    likes: {type:Number, default: 0}
});

module.exports = mongoose.model('Product', product);