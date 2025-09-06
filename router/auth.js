const AUth = require("express").Router()

Auth.get("/Login",(req,res)=>{
    res.render("Login")
})

//Login Using Google 

