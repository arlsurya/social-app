const jwt = require('jsonwebtoken')
const Constant = require('../Constant')
module.exports = (req,res,next)=>{
    try {

        let token = (req.headers.authorization ? req.headers.authorization.split(' ')[2] : "") ||
        req.body.token ||
        req.body.query 

        console.log(token)
        let decode = jwt.verify(token,Constant.JWTSECRETKEY)
        
        req.authData = decode;
        
        next()
    

        
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            statusCode: 401,
            message: 'Your Token is expired. Please login and try agin.'
        })
    }



}