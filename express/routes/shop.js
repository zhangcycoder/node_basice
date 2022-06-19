const path = require('path')
const rooterDir = require('../utils/path')

const express = require('express')
const router = express.Router()
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rooterDir, 'views', 'shop.html'))
})
module.exports = router
