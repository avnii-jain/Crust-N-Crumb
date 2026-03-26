import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {

    try{
    await mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.on('connected',() => {
        console.log("DB Connected"); 
    });
    } catch(error){
        console.log("Full Error");
        console.log(error);
    }
}

export default connectDB;