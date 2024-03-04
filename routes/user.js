const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validation = require('../middleware/Validation');

router.post('/createUser', validation.signupValidation ,userController.signup);
router.get('/loginUser', validation.loginValidation , userController.login); 
module.exports = router;