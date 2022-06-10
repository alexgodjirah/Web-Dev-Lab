const express = require('express');
const router = express.Router();
const api = express.Router();
const v1 = require('./v1');

router.use('/api', api);
api.use('/v1', v1)


module.exports = router