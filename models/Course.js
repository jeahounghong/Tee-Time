const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Demical128 = Schema.Decimal128;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        lat: {
            type: Decimal128,
            required: true
        },
        long: {
            type: Decimal128,
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