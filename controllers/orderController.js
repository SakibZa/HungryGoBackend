const Order = require('../models/Order');

module.exports.createOrder = async (req, res) => {
    try {
        const { email, order_data, orderDate } = req.body;

        // Check if order exists for the given email
        const existingOrder = await Order.findOne({ email });

        if (!existingOrder) {
            // If no order exists, create a new one
            const order = new Order({ email, order_data });
            await order.save();
            return res.status(200).json({
                msg: "Order Placed",
                success: true,
                order: order
            });
        } else {
            // If order exists, update the order_data field
            existingOrder.order_data.push(...order_data );
            await existingOrder.save();

            return res.status(200).json({
                msg: "Update Order Placed",
                success: true,
                updateOrder: existingOrder
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(400).json({
            msg: "Something went wrong",
            success: false
        });
    }
};

module.exports.getOrder = async(req, res)=>{

    try{
        
        const email = req.params.email;
        const order = await Order.findOne({email});
        if(!order){
            return res.json(400 , {
                msg:"No Order Found",
                success: false
            });
        }
        return res.json(200,  {
            msg:"Order",
            order: order,
            success: true
        })

    }
    catch(err)
    {
        return res.json(400 , {
            msg:"Internal Server Error",
            success : false,
            err: err
        })
    }
}
