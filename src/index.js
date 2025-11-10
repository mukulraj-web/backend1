import dotenv from "dotenv"
dotenv.config()
import {app} from "./app.js"
const port = process.env.PORT || 3000

import connectDB from "./db/index.js"

connectDB()
.then(()=> {
    app.listen(port, () => {
        console.log(`app is running on port : ${port}`);


    })

})
.catch((err)=> {
    console.log("MONGO DB connection failed !!! ", err)
})






























/*
import express from "express"
const app = express()
;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("ERROR", error)
        throw error
    }
})()
    */