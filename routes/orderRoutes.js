

const express = require("express")


const orderController = require('../controllers/orderControllers')
const { verifyToken } = require("../middlewares/authMiddleware")



const router = express.Router()


router.get('/', orderController.allOrders )
router.post('/', verifyToken, orderController.createOrder )


module.exports = router


