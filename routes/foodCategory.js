const express = require('express');
const router = express.Router();
const foodCategory = require('../controllers/foodController');

router.post('/createFood-category', foodCategory.createFoodCategory);

router.get('/getCategory' , foodCategory.getAllCategory);
module.exports = router;