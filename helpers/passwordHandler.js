require('dotenv').config({ path: '../.env' });

const bcrypt = require('bcrypt');
const salt = Number(process.env.SALT);

const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

const verifyPassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}


// Test:
// const userPassword = hashPassword('11223344');

// const comparePassword = verifyPassword('11223344', userPassword);

// console.log(userPassword, comparePassword);

module.exports = {hashPassword, verifyPassword};