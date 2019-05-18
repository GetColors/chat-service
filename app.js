require('dotenv').config();

const express =  require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const modules = require('./src/contexts/index');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message : 'Chat backend.',
        status : {
            general: true,
        },
    });
});

app.use('', modules);

module.exports = app;