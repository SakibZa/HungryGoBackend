const express = require('express');
const router = express.Router();    

router.use('/user', require('./user'));

router.use('/foodItem' , require('./foodItem'));

router.use('/foodCategory', require('./foodCategory'));

router.use('/orderData' , require('./orderData') );

router.use('/Cart' , require('./Cart'));

module.exports = router; 