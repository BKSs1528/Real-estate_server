const express = require("express")
const app = express()

const middleWare=(req,res,next)=>{
    console.log("hello balakishore");
    next()
}

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/about",middleWare,(req,res)=>{
    res.send("about page")
})

app.listen(3002)