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
    slug : {
        type: String,
    },
},{
    timestamps : true
});

const Students = mongoose.model('Student' , Student );

export default Students
