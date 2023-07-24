const mongoose = require('mongoose')

const connectDB = ()=>{
 mongoose.connect(`mongodb://${process.env.DBHOST}:${process.env.DBPORT}`,{
    dbName: process.env.DBNAME
 }).then(()=>{
    console.log(`Database is connected to ${process.env.DBHOST}:${process.env.DBPORT}/${process.env.DBNAME}`)
 })

}

module.exports = connectDB;