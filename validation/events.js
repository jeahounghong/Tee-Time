const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data){
    let errors = {}

    if (!data.courseId){
        errors.courseId = 'Events need a course'
    }

    if (!data.eventSize){
        errors.eventSize = 'Event size is a required field'
    } else {
            if (data.eventSize < 2) {
                errors.eventSize = 'Event size must be at least 2'
            }
        
            if (data.eventSize > 4){
                errors.eventSize = 'Event size must be at most 4'
            }
    }

    if (!data.eventTime){
        errors.eventTime = 'Event time is a required field'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}