const express=require('express')
const fs= require('fs')
const userRouter=express.Router()

userRouter.get("/",(req,res)=>{
    const userData=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.send(userData.data)
})



module.exports={userRouter}