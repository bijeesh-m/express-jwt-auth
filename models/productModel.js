


const mongoose = require("mongoose")



const productSchema = new mongoose.Schema({
    pName: {
        type: String,
        required: true
    },
    pPrize: {
        type: String,
        required: true
    },
    pQuantity: {
        type: String,
        required: true
    },
    pDescription: {
        type: String,
        required: true
    },

    pId: {
        type: String,
        default: () => "PID" + Date.now()

    }

})

const Product = mongoose.model("products", productSchema)

module.exports = Product