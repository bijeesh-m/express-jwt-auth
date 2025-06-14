const User = require("../models/userModel");







module.exports.profile = async (req, res) => {

    console.log("req.user :",req.user);
    try {
        console.log("User profile")
        res.status(200).json({ message: "user profile!" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}