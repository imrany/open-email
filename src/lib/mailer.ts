import nodemailer from "nodemailer"
import { mailDetailsInterface, sendInterface } from "../types/int"
import * as dotenv from "dotenv"
dotenv.config()

async function mailer(req:any,res:any):Promise<void>{
   try {
    let {mailfrom,mailto,subject,message}:sendInterface=req.body
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
        to:mailto,
        subject,
        text:message
    }
    mailTransporter.sendMail(details,(err: any)=>{
        if(err){
            res.status(404).json({error:"Mail wasn't sent, try again!"})
        }else{
            res.status(200).json({msg:"Mail sent"})
        }
    })
   } catch (error:any) {
    res.status(500).send({error:error.message})
   }
}

export default mailer