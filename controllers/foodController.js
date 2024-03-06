const foodCategory = require('../models/foodCategory');
module.exports.createFoodCategory = async(req, res) =>{

    try{

        const foodcategory = await foodCategory.create(req.body);
        if(!foodcategory){
            return res.json(400, {
                msg:"Some Problem Occured",
                success: false,
            })
        }
        return res.json(200,{
            msg:"Food Category Created",
            success: true,
            foodcategory:foodcategory
        })
    }
    catch(err)
    {
        console.log("err" , err);
        return res.json(400, {
            success: false,
            msg: "Internal Server Error",
            err: err
        })
    }

}
module.exports.getAllCategory = async( req, res) =>{

    try{

        const foodcategory = await foodCategory.find();
        if(!foodcategory){
            return res.json(400, {
                msg:"Some Problem Occured",
                success: false,
            })
        }
        return res.json(200,{
            msg:"Food Category List",
            success: true,
            foodcategory:foodcategory
        })

    }
    catch(err)
    {
        return res.json(400 , {
            msg:"Internal Server Error",
            success: false,
            err: err
        })
    }
}