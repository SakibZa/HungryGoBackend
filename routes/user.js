const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validation = require('../middleware/Validation');
const auth = require('../middleware/auth');

router.post('/createUser', validation.signupValidation ,userController.signup);
router.post('/loginUser', validation.loginValidation , userController.login); 
router.get('/sample', auth.verifyAccessToken, (req, res) => {

       return res.send("Hello World");
})
module.exports = router;