const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userSchema");
const propModel = require("../models/propSchema");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.key;

router.post("/addprop", (req,res)=>{
    try{
        const mail = jwt.verify(req.headers.authorization, secretKey);
        userModel.find({mail:mail}).then((userData)=>{
            if(userData.length){
                propModel.create({
                mail:userData[0].mail,
                PropertyType:req.body.PropertyType,
                Views:Math.floor((Math.random()*100)+1),
                Negotiable:req.body.Negotiable,
                Ownership:req.body.Ownership,
                Price:req.body.Price,
                PropertyAge:req.body.PropertyAge,
                PropertyApproved:req.body.PropertyApproved, 
                PropertyDescription:req.body.PropertyDescription, 
                BankLoan:req.body.BankLoan,
                Length:req.body.Length ,
                Breadth:req.body.Breadth ,
                TotalArea:req.body.TotalArea,
                AreaUnit:req.body.AreaUnit ,
                NoOfBHK:req.body.NoOfBHK ,
                NoOfFloor:req.body.NoOfFloor, 
                Attached :req.body.Attached,
                WesternToilet:req.body.WesternToilet,
                Furnished:req.body.Furnished ,
                CarParking:req.body.CarParking ,
                Lift :req.body.Lift,
                Electricity:req.body.Electricity ,
                Facing:req.body.Facing ,
                DaysLeft: req.body.DaysLeft,
                Name:req.body.Name,
                Mobile:req.body.Mobile ,
                PostedBy:req.body.PostedBy,
                SaleType:req.body.SaleType, 
                FeaturedPackage:req.body.FeaturedPackage,
                PPDPackage:req.body.PPDPackage,
                Photo:req.body.Photo,
                Email:req.body.Email,
                City:req.body.City,
                Area:req.body.Area ,
                Pincode:req.body.Pincode ,
                Address:req.body.Address,
                Landmark:req.body.Landmark,
                Latitude:req.body.Latitute , 
                Longitude:req.body.Longitude
            })
            res.status(200).json("success");
            }else{
                res.status(400).json('Unauthorized User');
            }
        })
    }catch(err){
        res.status(400).json(err);
    }
})

module.exports = router;