const express = require("express");
const connectDb = require("./config/dbConfig");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes  = require("./routes/productRoute");
const orderRoute  = require("./routes/orderRoutes");
const cookieParser = require("cookie-parser");
const { verifyToken } = require("./middlewares/authMiddleware");
const Order = require("./models/orderModel");


const app = express();
app.use(express.json()); // to convert json data to its original form.
app.use(cookieParser()) // to parse cookies

// app.use(verifyToken)

require("dotenv").config() // to access env variables from .env file

connectDb(); // establish database connection





app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/products",productRoutes)
app.use("/orders",orderRoute)




app.listen(4000, () => {
    console.log("Server is running!")
})

