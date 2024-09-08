const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(), 
    phoneNo: Joi.string().length(10).pattern(/^[0-9]+$/).required(), 
    name: Joi.string().required(),
    

});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
});

const validateUser = (type,user) => {
    if(type === 'login') {
        return loginSchema.validate(user);  
    }
    else if(type === 'register') {
        return userSchema.validate(user);           
    }    
    else {
        return {error: "Invalid type"};
    }
};

module.exports = {  validateUser };