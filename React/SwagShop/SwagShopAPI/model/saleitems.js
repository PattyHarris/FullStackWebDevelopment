var mongoose = require('mongoose');
var saleItemsSchema = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;

var saleItems = new saleItemsSchema({
    products: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    relatedItems: [{type:  mongoose.Schema.Types.ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('SaleItems', saleItems);