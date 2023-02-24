import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect successfully !")
    } catch (error) {
        console.log("Fail to connect", error)
    }
}

export default {
    connect
}