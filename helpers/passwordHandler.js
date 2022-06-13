require('dotenv').config({ path: '../.env' });

const bcrypt = require('bcrypt');
const salt = Number(process.env.salt);

const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

const verifyPassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}


// Test:
// let password = '';

// hashPassword('11223344').then(hashPassword => {
//     console.log(hashPassword);
//     password = hashPassword
//     verifyPassword('12233', password).then(hashedPassword => {
//         console.log(hashedPassword)
//     })
// })

module.exports = { hashPassword, verifyPassword }