const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers");
const { verifyToken, verifyRole } = require("../middlewares/authMiddleware");


router.get('/profile', verifyToken, verifyRole(["user"]), userController.profile);



module.exports = router;