
const mongoose = require("mongoose");

const bcrypt = require("bcryptjs")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
})

userSchema.pre("save",async function(next){
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

const User = mongoose.model("user", userSchema);
module.exports = User;