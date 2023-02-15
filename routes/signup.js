const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const userModel = require("../models/userSchema");

const salt = 10;

router.post("/reg",async(req,res)=>{
    await userModel.find({
        mail:req.body.mail
    }).then((data)=>{
        if(data.length){
            res.status(400).json("User Already Exist")
        }else{
            bcrypt.genSalt(salt).then((saltHash)=>{
                bcrypt.hash(req.body.password, saltHash).then((hashedPassword)=>{
                    userModel.create({
                        mail:req.body.mail,
                        password:hashedPassword
                    }).then((userData)=>{
                        res.status(200).send({userData});
                    })
                }).catch((err)=>{
                    console.log(err);
                })
            }).catch((err)=>{
                console.log(err);
            })
        }
    })
})

module.exports = router;