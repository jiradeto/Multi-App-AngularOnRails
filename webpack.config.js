const {
    ADMIN_CONFIG
} = require('./admin-app/webpack.config.js');
const {
    WEB_CONFIG
} = require('./web-app/webpack.config.js');
const {
    CAT_CONFIG
} = require('./cat/webpack.config.js');


module.exports = [
    WEB_CONFIG, CAT_CONFIG
];