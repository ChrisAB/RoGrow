const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ProductName: {type: String, required: true },
    ProductCategory: {type: String, required: true },
    ProductSubcategory: {type: String, required: true },
    ProductDescription: {type: String, required: true },
    ProductPrice: {type: Number, required: true },
    ProductQuantity: {type: Number, required: true },
    PickupLocation: {type: String, required: true },
    ProductOrigin: {type: String, required: true },
    SellerUniqueID: {type: mongoose.Schema.Types.ObjectId, ref: '/user', required: true}
});

module.exports = mongoose.model('Product', productSchema);