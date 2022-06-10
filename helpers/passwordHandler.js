require('dotenv').config({ path: '../.env' });

const bcrypt = require('bcrypt');
const salt = Number(process.env.salt);

const hashPassword = async (password) => {
    return await bcrypt.hash(password, salt);
}

const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}


// Test:
let password = '';

hashPassword('11223344').then(hashPassword => {
    console.log(hashPassword);
    password = hashPassword
    verifyPassword('12233', password).then(hashedPassword => {
        console.log(hashedPassword)
    })
})