const express = require("express");

const productController = require("../controllers/productController");
const { verifyToken, verifyRole } = require("../middlewares/authMiddleware");

const router = express.Router()



router.get('/', productController.allProducts)
router.get('/:prodId', verifyToken, productController.product)
router.put('/:prodId', verifyToken, verifyRole(["admin","user"]), productController.update)
router.delete('/:prodId', productController.delete)




module.exports = router