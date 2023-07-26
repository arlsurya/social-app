const express = require('express')
const router = express.Router()
const userController = require('../../Controller/userController')
const isAuth = require('../../Middleware/authenticated')

router.post('/login', userController.userLogin)
router.post('/register', userController.userRegister)
router.post('/chat', isAuth, userController.userChat)
router.post('/chatlist', isAuth, userController.getUserChat)

module.exports = router;
