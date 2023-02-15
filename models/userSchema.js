const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    }
})

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;