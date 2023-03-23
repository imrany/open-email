import nodemailer from "nodemailer"
import { mailDetailsInterface, sendInterface } from "../interfaces&types/int"
import * as dotenv from "dotenv"
dotenv.config()

async function mailer(req:any,res:any):Promise<void>{
   try {
    let {mailfrom,email,subject,text}:sendInterface=req.body
    subject=`${mailfrom}: ${subject}`
    let mailTransporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.TRANSPORTER,
            pass:process.env.PASSWORD
        }
    })
    let details:mailDetailsInterface={
        from:process.env.TRANSPORTER,
        to:email,
        subject,
        text
    }
    mailTransporter.sendMail(details,(err: any)=>{
        if(err){
            res.status(201).send({error:"Mail wasn't sent, try again!"})
        }else{
            res.status(200).send({msg:"Mail sent"})
        }
    })
   } catch (error:any) {
    res.status(500).send({error:error.message})
   }
}

export default mailer