const express = require('express');
const router = express.Router();
const foodItem = require('../controllers/foodItemController');

router.post('/createItem', foodItem.createFood);

router.get('/getAllItem', foodItem.getAllFood);

module.exports = router;