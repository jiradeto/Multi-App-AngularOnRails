const {
    GOODBYE_CONFIG
} = require('./goodbye/webpack.config.js');
const {
    HELLO_CONFIG
} = require('./hello/webpack.config.js');

module.exports = [
    GOODBYE_CONFIG, HELLO_CONFIG
];