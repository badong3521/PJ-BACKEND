import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Student = new Schema({
    name: {
        type: String,
        default: 'Xem thêm'
    },
    age: {
        type: Number,
        min: 18,
        index: true
    },
    class: {
        type: String, maxLength: 5
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    },
});

const Students = mongoose.model('Student' , Student );

export default Students
