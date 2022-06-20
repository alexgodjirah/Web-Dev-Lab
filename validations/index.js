const Joi = require('joi');

const username = Joi.string().min(4).max(25);
const password = Joi.string().pattern(new RegExp(`6[A-Za-z0-9]{3,20}$`));
const confirm_password = Joi.ref('password');
const access_token = Joi.string();
const email = Joi.string().email();


const RegisterSchema = Joi.object({
    username: username.required(),
    password: password.required(),
    confirm_password: confirm_password.required(),
    access_token: access_token.required(),
    email: email.required()
}).with('username', 'email').with('password', 'repeat_password').xor('password','access_token');

// xor is used to create a condition where we can only inputted 1 option from given option

module.exports = { RegisterSchema };