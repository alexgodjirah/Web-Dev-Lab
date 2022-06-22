require('dotenv').config({ path: '../.env' });

const bcrypt = require('bcrypt');
const salt = Number(process.env.salt);

const hashPassword = async (password) => {
    return await bcrypt.hashSync(password, salt);
}

const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compareSync(password, hashedPassword);
}


// Test:
// let password = '';

// hashPassword('11223344').then(hashPassword => {
//     console.log(hashPassword);
//     password = hashPassword
//     verifyPassword('11223344', password).then(hashedPassword => {
//         console.log(hashedPassword)
//     })
// })

module.exports = { hashPassword, verifyPassword }