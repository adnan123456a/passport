const Auth = require("express").Router()

Auth.get("/Login",(req,res)=>{
    res.render("login")
})

//Login Using Google 

Auth.get("/google",(req,res)=>{
res.send("Login Using Google")
})

module.exports = Auth