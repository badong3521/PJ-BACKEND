import mongoose from "mongoose"
const Schema = mongoose.Schema;

const users = new Schema({
    email: {
        type: String,
        require: [true, "email must be require"]
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    fullName: {
        type: String,
        required: [true, "fullName must be require"]
    },
    roles: {
        type: Array,
        default: []
    },
    status: {
        type: String,
        default: 'noactive'
    },
    type_regis: {
        type: String,
        default: 'WE'
    },
    deleteAt: {
        type: Date,
        default: Date.now
    },
    action: {
        type: String,
        default: 'System'
    },
    password: {
        type: String,
        required: [true, "password must be require"]
    },
    role: {
        type: String,
        require: true
    }

}, {
    collection: 'users',
    timestamps: true
})

users.index({
    email: 1
}) //Nơi đánh index
const Users = mongoose.model("User", users)

export default Users

// fullName: {
//         type: String,
//         required: [true, "fullName must be require"]
//     },
//     email: {
//         type: String,
//         required: [true, "email must be require"],
//         unique: true
//     },
//     age: Number,
//     address: String,
//     phoneNumber: String,
//     password: {
//         type: String,
//         required: [true, "password must be require"]
//     },
//     role: {
//         type: String,
//         require: true
//     }