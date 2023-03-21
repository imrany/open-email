import express from "express"
import { sendInterface } from "./interfaces&types/int"
import mailer from "./lib/mailer"

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
        let {mailfrom,email,subject,text}:sendInterface=req.body
        subject=`${mailfrom}: ${subject}`
        res.status(200).send(mailer(email,subject,text))
    } catch (error:any) {
        res.status(500).send({error:error.message})
    }
})

//listening to port
let port:number|string=process.env.PORT||8000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

