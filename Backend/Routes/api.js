const express = require('express')
const router = express.Router()
const userRoutes = require('./User/user')

router.use('/user', userRoutes)


module.exports = router;