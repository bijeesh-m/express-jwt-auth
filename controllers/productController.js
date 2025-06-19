const Product = require("../models/productModel")




module.exports.allProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({ message: "products fetched successfully!", products })
    } catch (error) {
        res.status(500).json({ message: "products fetching failed!", error: error.message })
    }
}
module.exports.product = async (req, res) => {
    try {
        const { prodId } = req.params
        const product = await Product.findOne({ pId: prodId })
        res.status(200).json({ message: "product fetched successfully!", product })
    } catch (error) {
        res.status(500).json({ message: "products fetching failed!", error: error.message })
    }
}

module.exports.update = async (req, res) => {
    try {

        const { prodId } = req.params
        const { pName, pPrize, pQuantity, pDescription } = req.body


        const product = await Product.findOne({ pId: prodId })

        product.pName = pName ? pName : product.pName
        product.pPrize = pPrize ? pPrize : product.pPrize
        product.pQuantity = pQuantity ? pQuantity : product.pQuantity
        product.pDescription = pDescription ? pDescription : product.pDescription

        await product.save()

        res.status(200).json({ message: "product updated successfully!", product })
    } catch (error) {
        res.status(500).json({ message: "products fetching failed!", error: error.message })
    }
}


module.exports.delete = async (req, res) => {
    try {

        const { prodId } = req.params
        
        await Product.findByIdAndDelete(prodId)

        res.status(200).json({ message: "product deleted successfully!" })
    } catch (error) {
        res.status(500).json({ message: "products fetching failed!", error: error.message })
    }
}