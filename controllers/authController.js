const User = require('../db/models/user')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
    const { email } = req.body;

    const duplicateEmail = await User.findOne({ email })
    if (duplicateEmail)
        throw new CustomError.BadrequestError('Email Already Exist')

    const user = await User.Create(req.body)
    res.status(StatusCodes.CREATED).json({ user })

}


const login = async (req, res) => {

}

const logout = async (req, res) => {

}

module.exports = { register, login, logout }