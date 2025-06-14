
const jwt = require("jsonwebtoken");


module.exports.verifyToken = (req, res, next) => {
    try {
        const token = req.cookies.authToken;
        if (!token) {
            return res.status(400).json({ message: "token not found" })
        }

        jwt.verify(token, process.env.secret_key, (err, decoded) => {
            if (err) {
                return res.status(400).json({ message: "Token verification failed", error: err.message });
            }

            console.log("decoded token :", decoded)
            req.user = decoded
            next()
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports.verifyRole = (roles) => {

    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            return next()
        }

        res.status(401).json({ message: "Unoathorized!" });
    }

}
