const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// const Decimal128 = Schema.Decimal128;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        lat: {
            type: Number,
            required: true
        },
        long: {
            type: Number,
            required: true
        } 
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = Course = mongoose.model('Course', CourseSchema)