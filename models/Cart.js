const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    option: {
        type: String
    },
    amount: {
        type: String
    }
});

const CartSchema = new mongoose.Schema({
    email: {
        type: String
    },
    data: [CartItemSchema]
});

const CartModel = mongoose.model('Cart', CartSchema);
module.exports = CartModel;
