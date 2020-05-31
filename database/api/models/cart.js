const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Products: [{type: mongoose.Schema.Types.ObjectId, ref: '/product'}],
    ClientUniqueID: {type: mongoose.Schema.Types.ObjectId, ref: '/user'}
});

module.exports = mongoose.model('Cart', cartSchema);