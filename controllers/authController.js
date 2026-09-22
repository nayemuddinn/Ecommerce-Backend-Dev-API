const User = require('../db/models/user')
const { StatusCodes } = require('http-status-codes')
const customErr = require('../errors')
const  createTokenUser  = require('../utils/createTokenUser')

const register = async (req, res) => {
    const { email, name, password } = req.body;

    const duplicateEmail = await User.findOne({ email })
    if (duplicateEmail)
        throw new customErr.BadrequestError('Email Already Exist')

    const isFirstAccount = (await User.countDocuments({})) === 0;
    const role = isFirstAccount ? 'admin' : 'user';

    const user = await User.create({ name, email, password, role })

    res.status(StatusCodes.CREATED).json({ user })

}


const login = async (req, res) => {
    const { email, password } = req.body;



    if (!email || !password)
        throw new customErr.BadRequestError('Please complete the email and password field')

    const user = await User.findOne({ email })

    if (!user)
        throw new customErr.UnauthenticatedError('Invalid Credential')



    const validPass = await user.comparePassword(password);

    if (!validPass)
        throw new customErr.UnauthenticatedError('Invalid Credential')

    const tokenUser = createTokenUser(user);


    res.status(StatusCodes.OK).json({ user: tokenUser })
}

const logout = async (req, res) => {

}

module.exports = { register, login, logout }