import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Bag = new Schema({
    name: {
        type: String,
        default: 'Bag default'
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    image: {
        type: String
    }
}, {
    timestamps: true
});

const Bags = mongoose.model('Bag', Bag);

export default Bags