import express from "express"

const app=express()

//listening to port
let port:number|string=process.env.PORT||8000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})