const express = require('express')
const app = express();
require('dotenv').config();


const dbConnection = require('./db/connection/connect')

const PORT = process.env.PORT

const start = () => {
    try {
        dbConnection(process.env.MONGO_URI);
        app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}


start();
