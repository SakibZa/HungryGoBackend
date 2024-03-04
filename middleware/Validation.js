const { body, validationResult } = require("express-validator");

module.exports.signupValidation = [
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
  body("name")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
module.exports.loginValidation = [

    body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"),
   (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },

]
