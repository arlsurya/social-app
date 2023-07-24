module.exports = {
    userLogin: async(req,res)=>{
        return res.status(200).json({
            statusCode:200,
            message: 'login success'
        })
    }
}