const Cart = require("../models/Cart");
module.exports.createCart = async (req, res) => {
  try {
    
        const { email, data } = req.body;
        const findCart = await Cart.findOne({ email });
        if(!findCart){
            const cart = new Cart({ email, data });
            await cart.save();
            return res.status(200).json({
                
                msg: "Cart Created",
                success: true,
                cart: cart
            })
        }
        else{
            findCart.data.push(...data);
            await findCart.save();
            return res.status(200).json({
                msg: "Cart Updated",
                success: true,
                cart: findCart
            })
        }

  }
  catch(err){
    return res.json(400, {
        msg:"Internal Server Error",
        success: false

    })
  }
};

module.exports.getCart = async(req, res)=>{

    try{

        const email = req.params.email;
        const cart = await Cart.findOne({email});
        if(!cart){
            return res.json(400 ,{
                msg:"No Cart Found",
            })
        }
        return res.json(200, {
            msg:"Cart",
            cart: cart
        })
    }
    catch(err)
    {
        return res.json(400 ,{
            msg:"Internal Server Error",
            success : false,
            err: err
        })
    }
}
