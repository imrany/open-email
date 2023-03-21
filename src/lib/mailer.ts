import nodemailer from "nodemailer"
import { mailDetailsInterface } from "../interfaces&types/int"
import * as dotenv from "dotenv"
dotenv.config()

function mailer(email:string, subject:string, text:string){
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
            return({error:"Mail wasn't sent, try again!"})
        }else{
            return({msg:"Mail sent"})
        }
    })
}

export default mailer