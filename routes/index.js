const express = require('express');
const { authentication } = require('../middlewares/authentication');
const router = express.Router();
const api = express.Router();
const v1 = require('./v1');

router.use('/api', api);
api.use('/v1', v1)


router.use(authentication);
router.get('/lolos', async (req, res) => {
    res.json('lolost authentication')
})

module.exports = router