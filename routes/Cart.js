const express = require('express');
const route = express.Router();

const cartController = require('../controllers/cartController');

route.post('/createCart' , cartController.createCart);

route.get('/getAll/:email' , cartController.getCart)

module.exports =  route;