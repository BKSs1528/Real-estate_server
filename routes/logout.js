const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userSchema");
// const propModel = require("../models/propSchema");

const dotenv = require("dotenv");
dotenv.config();
const key = process.env.key;

router.get("/done",(req,res)=>{
    const mail = jwt.verify(req.headers.authorization, key);
    const obj = userModel.find({mail:mail}).then((userData)=>{
        res.send(userData);
    })
})

module.exports = router;