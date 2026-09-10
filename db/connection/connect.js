const mongoose = require('mongoose')
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"])

const connect = (url) => {
    return mongoose.connect(url);
}

module.exports = connect
