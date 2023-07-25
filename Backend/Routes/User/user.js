const express = require('express')
const router = express.Router()
const userController = require('../../Controller/userController')

router.post('/login', userController.userLogin)
router.post('/register', userController.userRegister)
router.post('/chat', userController.userChat)

module.exports = router;
