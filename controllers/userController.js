const User = require("../models/User");
module.exports.signup = async (req, res) => {
  try {
    const isUserExist = await User.findOne({ email: req.body.email });
    if (isUserExist) {
      return res.status(400).json({
        success: false,
      });
    }
    const user = await User.create(req.body);
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
    if (user.password !== req.body.password) {
      return res.json(400, {
        msg: "Incorrect Password",
      });
    }

    return res.json(200, {
      msg: "User Logged in",
      success: true,
      user: user,
    });
  } catch (err) {
    return res.json(400, {
      success: false,
      msg: "Invalid credentials",
    });
  }
};
