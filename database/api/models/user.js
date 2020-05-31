const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    FirstName: {type: String, required: true },
    LastName: {type: String, required: true },
    Password: {type: String, required: true },
    Salt: {type: String, required: true },
    Email: {type: String, required: true },
    Location: {type: String, required: true },
    SellerOrClientFlag: {type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);