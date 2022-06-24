require('dotenv').config({ path: '../.env' });

const jwt = require('jsonwebtoken');
const secret_key = process.env.SECRET_KEY;

const generateToken = async (payload) => {
    return await jwt.sign(payload, secret_key, { expiresIn: '7d' });
}

const verifyToken = async (payload) => {
    return await jwt.verify(payload, secret_key, { complete: true })
}


// Test:
// const user = {
//     id: 1,
//     username: 'admin',
//     role: 'admin'
// }

// generateToken(user).then(e => {
//     console.log(e)
//     verifyToken(e).then(a => {
//         console.log(a)
//     })
// })

module.exports = {generateToken, verifyToken};