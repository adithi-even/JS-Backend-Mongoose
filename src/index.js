import mongoose from "mongoose";
import { DB_NAME } from "./constants";


//FIRST APROACH
// import express from "express";
// const app = express();

// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error" , (error)=>{           //First parameter: event name as string    // Second parameter: callback function that executes when event occurs
//         console.log("ERR", err);
//         throw error;
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
        
//        })

//     } catch (error) {
//         console.error("Error: ", error);
//         throw error;
//     }

// })()