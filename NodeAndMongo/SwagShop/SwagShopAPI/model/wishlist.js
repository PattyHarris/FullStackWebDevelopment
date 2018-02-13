var mongoose = require('mongoose');
var wishlistSchema = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;

var wishList = new wishlistSchema({
    title: {type: String, default: "My Wish List"},
    products: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('WishList', wishList);