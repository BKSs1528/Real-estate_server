const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const signupController = require("./routes/signup");
const loginController = require("./routes/login");
const addPropController = require("./routes/addProperty");
const viewPropController = require("./routes/viewProperty");
const logoutController = require("./routes/logout");
const cors = require("cors");

const App = express();

App.use(cors());
App.use(express.json({ limit: "30mb", extended: true }));
App.use(express.urlencoded({ extended: false }));
dotenv.config();

let URL = "mongodb+srv://user1:123tester@realestate.4ldww6u.mongodb.net/?retryWrites=true&w=majority"
// let url ="mongodb://localhost:27017/real_estate"

mongoose.connect(URL, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log("DB Connected");
    }
    else {
        console.log(err);
    }
});

App.listen(process.env.PORT || 3001, (err) => {
    if (!err) {
        console.log("server running");
    } else {
        console.log(err);
    }
});



App.get("/", (req, res) => {
    res.send("Home Page")
});

App.use("/signup", signupController);
App.use("/login", loginController);
App.use("/addProperty", addPropController);
App.use("/viewProperty", viewPropController);
App.use("/logout", logoutController);