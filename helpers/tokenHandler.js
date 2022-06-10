require('dotenv').config({ path: '../.env' });

// console.log(require('dotenv').config({ path: '../.env' }))

const jwt = require('jsonwebtoken');
const secret_key = process.env.SECRET_KEY

const generateToken = async (payload) => {
    return await jwt.sign(payload, secret_key, { expiresIn: '1d' });
}

const verifyToken = async (payload) => {
    return await jwt.verify(payload, secret_key, { complete: true })
}


// Test:
const user = {
    id: 1,
    username: 'admin',
    email: 'admin@admin.com'
}

generateToken(user).then(token => {
    console.log(token);
    verifyToken(token).then(data => {
        console.log(data);
    })
})