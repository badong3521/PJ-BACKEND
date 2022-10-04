import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Student = new Schema({
    name: {
        type: String,
        default: 'Xem thêm'
    },
    age: {
        type: String,
    },
    class: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    },
    slug : {
        type: String,
    }
});

const Students = mongoose.model('Student' , Student );

export default Students
