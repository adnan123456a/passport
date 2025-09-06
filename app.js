const express = require("express")
const app = express()
const ejs = require("ejs")
const path = require("path")
const Auth = require("./router/auth.js")

app.set('view engine','ejs')
app.set('views',path.join(__dirname,"files"))

app.listen(3000,()=>{
    console.log("App is listening")
})

app.get("/",(req,res)=>{
    res.render("index");
})

app.use('/auth',Auth)