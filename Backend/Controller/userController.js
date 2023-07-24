const bcrypt = require('bcrypt')
const saltRound = 10
module.exports = {
    userLogin: async (req, res) => {
        try {
            let { email, password } = req.body;

            if (!email) {
                return res.status(401).json({
                    statusCode: 401,
                    Code: 0,
                    message: "Email is Required"
                })
            }
            if (!password) {
                return res.status(401).json({
                    statusCode: 401,
                    Code: 0,
                    message: "Password is Required"
                })
            }

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
            return res.status(401).json({
                statusCode: 401,
                Code: 0,
                message: "Full Name is Required"
            })
          }
          if(!email){
            return res.status(401).json({
                statusCode: 401,
                Code: 0,
                message: "Email Name is Required"
            })
          }
          if(!password){
            return res.status(401).json({
                statusCode: 401,
                Code: 0,
                message: "Password is Required"
            })
          }
          if(!rePassword){
            return res.status(401).json({
                statusCode: 401,
                Code: 0,
                message: "Re-Entered Password is Required"
            })
          }

          if(password !== rePassword){
            return res.status(401).json({
                statusCode: 401,
                Code: 0,
                message: "Password and re-entered password do not match."
            })
          }


          let hashPassword = await bcrypt.hash(password,saltRound)
          console.log(hashPassword)


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