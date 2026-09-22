const express = require('express')
const route = express.Router();

const { register, login, logout } = require('../controllers/authController')
route.post('/register/', register).post('/login/', login).post('/logout/', logout)




module.exports = route