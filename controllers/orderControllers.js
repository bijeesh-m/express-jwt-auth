const Order = require("../models/orderModel")

module.exports.allOrders = async (req, res) => {

    try {

        const orders = await Order.find().populate("userId").populate("products");

        res.status(200).send(orders)
    } catch (error) {

    }

}
module.exports.createOrder = async (req, res) => {

    try {

        console.log(req.user)

        const order = { ...req.body, userId: req.user.id }
        const newOrder = await Order.create(order)

        res.status(200).json({ message: "Order success", newOrder })

    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error);

    }

}