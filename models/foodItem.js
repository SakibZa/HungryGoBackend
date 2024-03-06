const mongoose = require("mongoose");
const foodItem = new mongoose.Schema({
  CategoryName: {
    type: String,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
    validate: {
      validator: function (v) {
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  option: [{
    half: {
      type: String,
    },
    full: {
      type: String,
    },
    large: {
        type:String
    }
  }],
  description: {
    type: String,
  },
});

const food_item = mongoose.model("food_item", foodItem);
module.exports = food_item;
