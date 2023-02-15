const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userSchema");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.key;


router.post("/login",(req,res)=>{
    userModel.find({mail:req.body.mail}).then((userdata)=>{
        if(userdata.length){
            bcrypt.compare(req.body.password, userdata[0].password).then((validate)=>{
                if(validate){
                    const authToken = jwt.sign(userdata[0].mail, secretKey);
                    console.log(authToken);
                    res.status(200).send({authToken});
                }
                else{
                    res.status(400).json("Invalid Password");
                }
            })
        }else{
            res.status(400).json("Invalid Password");
        }
    })
});

module.exports = router;