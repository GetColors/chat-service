const express = require('express');
const modules = express();

const resource = require('./resource/index');

modules.use(resource);

module.exports = modules;