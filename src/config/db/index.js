import mongoose from 'mongoose';

async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/manager_student_dev');
        console.log("Connect successfully !")
    } catch (error) {
        console.log("Fail to connect" , error)
    }
}

export default {connect}