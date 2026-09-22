
const { StatusCodes } = require('http-status-codes');


const errorHandlerMiddleware = (err, req, res, next) => {

    return res.status(customError.statusCode).json({ msg: customError.msg });
}

module.exports =  errorHandlerMiddleware 