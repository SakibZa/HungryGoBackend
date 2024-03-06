const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.signup = async (req, res) => {
  try {
    const isUserExist = await User.findOne({ email: req.body.email });
    if (isUserExist) {
      return res.status(400).json({
        success: false,
        msg:"user already exist"
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
      name:req.body.name,
      email: req.body.email,
      password: hashedPassword,
      location: req.body.location,
    });
    return res.json(200, {
      success: true,
      msg: "user Created Succesfully",
      user: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
module.exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json(400, {
        msg: "User doesn't exist",
      });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.json(400, {
        msg: "Incorrect Password",
      });
    }
    const token = jwt.sign({id: user.id},  process.env.SECRET_KEY , {expiresIn: '1h'}) 
    return res.json(200, {
      msg: "User Logged in",
      success: true,
      user: user,
      token:token
    });
  } catch (err) {
    return res.json(400, {
      success: false,
      msg: "Invalid credentials",
    });
  }
};
