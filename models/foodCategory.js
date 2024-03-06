const mongoose = require("mongoose");
const food_category = new mongoose.Schema({
    
    CategoryName: {
        type:String
    }
});

const foodCategory = mongoose.model("foodCategory", food_category);
module.exports = foodCategory