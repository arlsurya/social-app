const app = require('./app')


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.HOST}:${process.env.PORT}`)
})
