const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateGroupInput(data) {
    let errors = {};
    console.log("INSIDE VALIDATIONS")
    data.name = validText(data.name) ? data.name : '';
    data.description = validText(data.description) ? data.description : '';

    if (Validator.isEmpty(data.name)){
        errors.name = 'Name field is required';
    }

    if (Validator.isEmpty(data.description)){
        errors.description = 'Description field is required';
    }

    // if (!data.ownerId){
    //     errors.ownerId = 'Groups must have an owner'
    // }


    // data.email = validText(data.email) ? data.email : '';
    // data.password = validText(data.password) ? data.password : '';
  
    // if (!Validator.isEmail(data.email)) {
    //   errors.email = 'Email is invalid';
    // }
  
    // if (Validator.isEmpty(data.email)) {
    //   errors.email = 'Email field is required';
    // }
  
    // if (Validator.isEmpty(data.password)) {
    //   errors.password = 'Password field is required';
    // }
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };