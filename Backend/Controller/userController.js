const userModel = require('../Model/userModel')
const chatModel = require('../Model/chatModel')
const bcrypt = require('bcrypt')
const saltRound = 10
const jwt = require('jsonwebtoken')
const Constant = require('../Constant')
module.exports = {
    userLogin: async (req, res) => {
        try {
            let { email, password } = req.body;

            if (!email) {
                return res.status(200).json({
                    statusCode: 401,
                    Code: 0,
                    message: "Email is Required"
                })
            }
            if (!password) {
                return res.status(200).json({
                    statusCode: 401,
                    Code: 0,
                    message: "Password is Required"
                })
            }

            
        let user = await userModel.findOne({email:email})

       if(!user){
        return res.status(200).json({
            statusCode: 404,
            Code: 0,
            message: "User Not Found With This Email"
        })
       }

       let passwordMatch = await bcrypt.compare(password, user.password)
  

       if(!passwordMatch){
        return res.status(200).json({
            statusCode: 401,
            Code: 0,
            message: "Email or Password does not match"
        })
       }

       const payload = {
        id:user._id
       }

       const authToken = jwt.sign(payload,Constant.JWTSECRETKEY,{expiresIn:'3hrs'}) 
       
       return res.status(200).json({
            statusCode:200,
            Code:1,
            token: `Bearer ${authToken}`,
            message: "User Login Successfully"
       })



        } catch (error) {
            console.log(error)
            return res.status(500).json({
                statusCode: 500,
                Code: 0,
                message: "Internal Server Error"
            })

        }


    },

    userRegister: async (req, res) => {
      
        try {
          let {fullName, email,password,rePassword} = req.body;

          if(!fullName){
            return res.status(200).json({
                statusCode: 401,
                Code: 0,
                message: "Full Name is Required"
            })
          }
          if(!email){
            return res.status(200).json({
                statusCode: 401,
                Code: 0,
                message: "Email Name is Required"
            })
          }
          if(!password){
            return res.status(200).json({
                statusCode: 401,
                Code: 0,
                message: "Password is Required"
            })
          }
          if(!rePassword){
            return res.status(200).json({
                statusCode: 401,
                Code: 0,
                message: "Re-Entered Password is Required"
            })
          }

          if(password !== rePassword){
            return res.status(200).json({
                statusCode: 401,
                Code: 0,
                message: "Password and re-entered password do not match."
            })
          }

          let userExist = await userModel.findOne({email:email})

          if(userExist){
            return res.status(200).json({
                statusCode: 401,
                Code: 0,
                message: "Another User Already Exist With this Email"
            })
          }

          let hashPassword = await bcrypt.hash(password,saltRound)
          console.log(hashPassword)

          req.body.password = hashPassword

          console.log(req.body)

          let user =  userModel(req.body)
          user = await user.save()

          
          delete user.password

          let payload = {
            id: user._id
          }

          let authToken = jwt.sign(payload,Constant.JWTSECRETKEY,{expiresIn:'3hrs'})

          return res.status(200).json({
            statusCode: 200,
            Code: 1 ,
            message: "User Successfully Registered",
            token :`Bearer ${authToken}`,
            data : user
        })


        } catch (error) {
            console.log(error)
            return res.status(500).json({
                statusCode: 500,
                Code: 0,
                message: "Internal Server Error"
            })

        }
    },
    userChat: async(req,res)=>{

        try {

            let {message} = req.body;
            let authData = req.authData
            userId = authData.id
          
            req.body.userId = userId


            if(!message){
                return res.status(200).json({
                    statusCode: 500,
                    Code: 0,
                    message: "Message field should not blank"
                })
            }

            // save user message to database
            let updateChat = chatModel(req.body)
            updateChat = await updateChat.save()

            let getAllChat = await chatModel.aggregate([
                { $match: {} },
              
                {
                  $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'userDetails'
                  }
                },
              
                {
                  $unwind: '$userDetails'
                },
              
                {
                  $project: {
                    message: 1,
                    fullName: '$userDetails.fullName',
                    email: '$userDetails.email',
                    createdAt: 1,
                  }
                }
              ]);


              return res.status(200).json({
                statusCode:200,
                Code:1,
                message: "All Chat list",
                data: getAllChat
              })

            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                statusCode: 500,
                Code: 0,
                message: "Internal Server Error"
            })
            
        }

    },
    getUserChat: async(req,res)=>{
      try {
        let getAllChat = await chatModel.aggregate([
          { $match: {} },
        
          {
            $lookup: {
              from: 'users',
              localField: 'userId',
              foreignField: '_id',
              as: 'userDetails'
            }
          },
        
          {
            $unwind: '$userDetails'
          },
        
          {
            $project: {
              message: 1,
              fullName: '$userDetails.fullName',
              email: '$userDetails.email',
              createdAt: 1,
            }
          }
        ]);


        return res.status(200).json({
          statusCode:200,
          Code:1,
          message: "All Chat list",
          data: getAllChat
        })

        
      } catch (error) {
        console.log(error)
        return res.status(500).json({
          statusCode: 500,
          Code: 0,
          message: "Internal Server Error"
      })
        
      }
    }
}