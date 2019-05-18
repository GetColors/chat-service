const router = require('express').Router();

const resourceController = require('./controllers/resourceController');

router.get('/status', resourceController.status);

module.exports = router;