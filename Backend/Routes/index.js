const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.send('index routes')
})

module.exports = router;