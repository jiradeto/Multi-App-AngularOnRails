const {
    ADMIN_CONFIG
} = require('./admin-app/webpack.config.js');
const {
    WEB_CONFIG
} = require('./web-app/webpack.config.js');


module.exports = [
    ADMIN_CONFIG, WEB_CONFIG
];