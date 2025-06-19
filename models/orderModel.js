

const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        default: () => "OID-" + Date.now(),
    },
    orderStatus: {
        type: String,
        default: "Pending",
    },
    orderAmount: {
        type: Number,
        required: true

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true,

    },
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "products"
    }

}, {
    timestamps: true,
}
)

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
