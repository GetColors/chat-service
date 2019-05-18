const express = require('express');
const security = express();

security.use('/resources', require('./routes'));

module.exports = security;