const User = require("../models/userModel")

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken")




module.exports.register = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        const isExist = await User.findOne({ email: email });

        if (isExist) {
            return res.status(409).json({ message: "User already exist with this email" })
        }

        // const newUser = await User.create(req.body)
        // const newUser = await User.create({
        //     username: username,
        //     email: email,
        //     password: password
        // })

        const user = await new User(req.body);
        await user.save()

        res.status(200).json({ message: "User registration succeed!", user })


    } catch (error) {
        res.status(500).json({ message: "Something went wrong!", error: error.message })
    }
}


module.exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;
        const isExist = await User.findOne({ email: email });

        if (!isExist) {
            return res.status(404).json({ message: "User not found!" });
        }

        const auth = await bcrypt.compare(password, isExist.password);

        console.log(auth)

        if (!auth) {
            return res.status(400).json({ message: "Invalid password!" })
        }


        const token = jwt.sign({ email: isExist.email, username: isExist.username, role: isExist.role }, process.env.secret_key, { expiresIn: "1hr" });

        res.cookie("authToken", token, { maxAge: 60 * 60 * 1000 })

        res.status(200).json({ message: "Login success" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



