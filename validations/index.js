const Joi = require('joi');

const username = Joi.string().min(4).max(25);
const email = Joi.string().email();
const password = Joi.string().pattern(new RegExp(`^[a-zA-Z0-9]{3,20}$`));
const confirm_password = Joi.ref('password');
const role = Joi.string().valid('user', 'admin')
const access_token = Joi.string();

const RegisterSchema = Joi.object({
    username: username.required(),
    email: email.required(),
    password: password.required(),
    confirm_password: confirm_password,
    role: role.required()
}).with('username', 'email').with('password', 'confirm_password').with('username', 'role');

// xor() method is used to create a condition where we can only enter 1 option at the time
// Read more about JOI


module.exports = { RegisterSchema };