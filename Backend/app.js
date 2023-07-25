const express = require('express')
const logger = require('morgan')
const dotenv = require('./env')
const cors = require('cors')
const app = express()

const DB = require('./Core/db')
DB()

app.use(logger('dev'))

const indexRoutes = require('./Routes/index')
const apiRoutes = require('./Routes/api')

app.use(cors())
app.use(express.json())


app.use('/', indexRoutes)
app.use('/api', apiRoutes)


module.exports = app;   