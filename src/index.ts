import express from "express"
import { sendInterface } from "./interfaces&types/int"

const app=express()

//route
app.get('/',async(req,res):Promise<void>=>{
    try {
        res.status(200).send({msg:"Hello there"})
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
})

app.post('/send',async(req,res):Promise<void>=>{
    try {
        const {mailfrom,mailto,subject,message}:sendInterface=req.body
        res.status(200).send({msg:"Hello there"})
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
})

//listening to port
let port:number|string=process.env.PORT||8000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

