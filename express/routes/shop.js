const path = require('path')

const express = require('express')

const rooterDir = require('../utils/path')
const adminData = require('./admin')

const router = express.Router()
router.get('/', (req, res, next) => {
    console.log(adminData.products, 'adminData')
    // res.sendFile(path.join(rooterDir, 'views', 'shop.html'))
    res.render('shop')
})
module.exports = router
