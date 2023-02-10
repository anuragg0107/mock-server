const express=require("express")
const app=express()
const cors=require('cors')
const {userRouter}=require("./Routes/user.route")

app.use(express.json())

app.use(express.json())
app.use(cors({
    origin: "*",
    credentials: true
}))
app.use("/data",userRouter)
app.get("/",(req,res)=>{
    res.send("this is home page")
})

app.listen(4000,()=>{
    console.log("this is running at port 4000");
})