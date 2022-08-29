const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateGroupInput(data) {
    let errors = {};
    data.name = validText(data.name) ? data.name : '';
    data.description = validText(data.description) ? data.description : '';

    if (Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    }

    if (Validator.isEmpty(data.description)){
        errors.description = 'Description field is required';
    }
    
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };