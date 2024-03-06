const food_item = require("../models/foodItem");
module.exports.createFood = async (req, res) => {
  try {
    const food = await food_item.create(req.body);
    if (!food) {
      return res.json(400, {
        msg: "Some Problem Occured",
      });
    }
    return res.json(200, {
      msg: "Item List Created",
      success: true,
      food: food,
    });
  } catch (err) {
    return res.json(400, {
      success: false,
      msg: "Internal Server Error",
    });
  }
};

module.exports.getAllFood = async (req, res) => {
  try {
    const getItem = await food_item.find();
    if (!getItem) {
      return res.json(400, {
        msg: "Some Problem Occured",
        success: false,
      });
    }
    return res.json(200, {
      msg: "Item List",
      success: true,
      getItem: getItem,
    });
  } catch (err) {
    return res.json(400, {
      msg: "Internal Server Error",
      success: false,
      err: err,
    });
  }
};
